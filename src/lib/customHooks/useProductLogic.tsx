import { useCheckout } from '@/lib/customHooks/useCheckout'
import { getDestructuredProductInfo } from '@/lib/functions/helpers/getDestructuredProductInfo'
import { CartTypes } from '@/lib/types/CartTypes'
import { usePathname } from 'next/navigation'
import { useMemo, useState } from 'react'

export function useProductLogic(productInfo: CartTypes) {
  const {
    title,
    price,
    description,
    variants,
    merchandiseId,
    variantName,
    hasMulitpleVariants,
    availableForSale,
    quantityAvailable,
  } = getDestructuredProductInfo(productInfo)

  const [selectedVariant, setVariant] = useState({
    id: merchandiseId,
    title: variantName,
    quantityAvailable: quantityAvailable,
  })
  const [quantity, setQuantity] = useState(1)

  const memoizedCartContent = useMemo(
    () => [{ merchandiseId: selectedVariant.id, quantity: quantity }],
    [selectedVariant, quantity]
  )

  const checkoutUrl = useCheckout(memoizedCartContent, [selectedVariant])
  const href = usePathname()

  const cartProductData = {
    ...productInfo,
    href,
    quantity,
    merchandiseId: selectedVariant.id,
    variantName: selectedVariant.title,
  }

  return {
    title,
    price,
    description,
    variants,
    hasMulitpleVariants,
    availableForSale,
    selectedVariant,
    setVariant,
    quantity,
    setQuantity,
    checkoutUrl,
    cartProductData,
  }
}
