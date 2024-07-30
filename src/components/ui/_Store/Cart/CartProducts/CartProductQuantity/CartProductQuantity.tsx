import { useCart } from '@/lib/customHooks/useCart'
import { useCartPathname } from '@/lib/customHooks/useCartPathname'
import { productInStockQuery } from '@/lib/shopify/queries/productsInStock'
import client from '@/lib/shopify/shopifyApi'
import { useEffect, useState } from 'react'
import { ProductQuantity } from '../../../Product/ProductInfo/ProductQuantity/ProductQuantity'

type CartProductActionsProps = {
  lineId: string
  quantity: number
  merchandiseId: string
}

export function CartProductQuantity({
  lineId,
  quantity,
  merchandiseId,
}: CartProductActionsProps) {
  const [isCartPage] = useCartPathname()
  const { updateQuantity } = useCart()
  const [maxQuantity, setMaxQuantity] = useState<number | null>(null)

  useEffect(() => {
    async function maxVariantQuantity() {
      const maxQuantity = await client.request(productInStockQuery, {
        variables: { variantId: merchandiseId },
      })
      setMaxQuantity(maxQuantity.data.node.quantityAvailable)
    }
    maxVariantQuantity()
  }, [])

  return (
    isCartPage &&
    maxQuantity !== null && (
      <div className="flex flex-1 items-start justify-between text-sm">
        <ProductQuantity
          lineId={lineId}
          quantity={quantity}
          setQuantity={(newQuantity) => updateQuantity(lineId, newQuantity)}
          maxVariantQuantity={maxQuantity}
        />
      </div>
    )
  )
}
