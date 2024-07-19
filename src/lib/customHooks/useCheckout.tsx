import { useEffect, useState } from 'react'
import { createCheckoutMutation } from '../shopify/mutations/createCheckoutMutation'
import client from '../shopify/shopifyApi'

function encodeShopifyId(id: string) {
  return btoa(`gid://shopify/ProductVariant/${id}`)
}

type UseCheckoutCart = {
  merchandiseId: string
  quantity: number
}

type UseCheckoutDependencies = any

export function useCheckout(
  cartContent: UseCheckoutCart[],
  dependencies?: UseCheckoutDependencies
) {
  const [link, setLink] = useState('')
  console.log('useCheckout - cartContent:', cartContent)

  useEffect(() => {
    const createCheckout = async () => {
      const lineItems = cartContent.map((product) => {
        const id = product.merchandiseId || product.merchandise?.id;
        if (!id) {
          console.error('Invalid product data:', product)
          return null
        }
        return {
          variantId: encodeShopifyId(
            id.replace('gid://shopify/ProductVariant/', '')
          ),
          quantity: product.quantity,
        }
      }).filter(item => item !== null)
      
      console.log('useCheckout - lineItems:', lineItems)
      const variables = { lineItems }

      try {
        const { data, errors } = await client.request(createCheckoutMutation, { variables })

        if (errors) {
          console.error('Checkout errors:', errors)
          throw new Error(errors.message)
        }

        if (data.checkoutCreate.checkout) {
          setLink(data.checkoutCreate.checkout.webUrl)
        } else {
          console.error('No checkout URL returned:', data)
        }
      } catch (error) {
        console.error('Error creating checkout:', error)
      }
    }

    createCheckout()
  }, [JSON.stringify(cartContent), ...(dependencies || [])])

  return link
}
