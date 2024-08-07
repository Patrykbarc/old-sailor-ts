import { useEffect, useState } from 'react'
import { debounce } from '../functions/debounce'
import { createCheckoutMutation } from '../shopify/mutations/createCheckoutMutation'
import client from '../shopify/shopifyApi'

type UseCheckoutCart = {
  merchandiseId: string
  quantity: number
}

type UseCheckoutDependencies = unknown[]

function encodeShopifyId(id: string) {
  return btoa(`gid://shopify/ProductVariant/${id}`)
}

export function useCheckout(
  cartContent: UseCheckoutCart[],
  dependencies?: UseCheckoutDependencies
) {
  const [link, setLink] = useState('')

  useEffect(() => {
    debouncedCreateCheckout(cartContent, setLink)
  }, [cartContent, ...(dependencies || [])])

  return link
}

const debouncedCreateCheckout = debounce(createCheckout, 300)

async function createCheckout(
  cartContent: UseCheckoutCart[],
  setLink: React.Dispatch<React.SetStateAction<string>>
) {
  const lineItems = cartContent
    .map((product) => {
      const id = product.merchandiseId
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
    })
    .filter((item) => item !== null)

  const variables = { lineItems }

  try {
    const { data, errors } = await client.request(createCheckoutMutation, {
      variables,
    })

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
