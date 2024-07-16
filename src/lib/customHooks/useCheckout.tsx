import { useEffect, useState } from 'react'
import { createCheckoutMutation } from '../queries/createCheckout'
import client from '../shopifyApi'

function encodeShopifyId(id: string) {
  return btoa(`gid://shopify/ProductVariant/${id}`)
}

type UseCheckoutType = { variantId: string; quantity: number }

export function useCheckout(cartContent: UseCheckoutType[]) {
  const [link, setLink] = useState('')

  useEffect(() => {
    const createCheckout = async () => {
      const lineItems = cartContent.map((product) => ({
        variantId: encodeShopifyId(
          product.variantId.replace('gid://shopify/ProductVariant/', '')
        ),
        quantity: product.quantity,
      }))

      const variables = { lineItems }

      try {
        const { data, errors } = await client.request(createCheckoutMutation, {
          variables,
        })

        if (errors) {
          throw new Error(errors.message)
        }

        if (data.checkoutCreate.checkout) {
          setLink(data.checkoutCreate.checkout.webUrl)
        }
      } catch (error) {
        console.error('Error creating checkout:', error)
      }
    }

    createCheckout()
  }, [cartContent.length])

  return link
}
