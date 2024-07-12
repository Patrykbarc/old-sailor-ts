import { useEffect, useState } from 'react'
import { CartTypes } from '../types/CartTypes'

type UseCheckoutType = Pick<CartTypes, 'variantId' | 'quantity'>

export function useCheckout(cartContent: UseCheckoutType[]) {
  const [link, setLink] = useState('')

  useEffect(() => {
    const queryParams = cartContent
      .map((product) => {
        const trimmedVariantId = product.variantId.replace(
          'gid://shopify/ProductVariant/',
          ''
        )
        return `${trimmedVariantId}:${product.quantity}`
      })
      .join(',')

    const SHOPIFY_PUBLIC_API_URL =
      process.env.NEXT_PUBLIC_SHOPIFY_PUBLIC_API_URL
    const finalUrl = `${SHOPIFY_PUBLIC_API_URL}/cart/${queryParams}?checkout`

    setLink(finalUrl)
  }, [cartContent])

  return link
}
