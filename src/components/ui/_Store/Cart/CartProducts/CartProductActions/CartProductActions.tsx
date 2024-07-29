import { useCart } from '@/lib/customHooks/useCart'
import { useStorePathname } from '@/lib/customHooks/useStorePathname'
import { productInStockQuery } from '@/lib/shopify/queries/productsInStock'
import client from '@/lib/shopify/shopifyApi'
import { useEffect, useState } from 'react'
import { ProductQuantity } from '../../../Product/ProductInfo/ProductQuantity/ProductQuantity'
import { RemoveCartItem } from '../../RemoveCartItem/RemoveCartItem'

type CartProductActionsProps = {
  lineId: string
  quantity: number
  merchandiseId: string
}

export function CartProductActions({
  lineId,
  quantity,
  merchandiseId,
}: CartProductActionsProps) {
  const [isCartPage] = useStorePathname()
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
    <div className="flex flex-1 items-end justify-between text-sm">
      {!isCartPage ? (
        <p className="text-neutral-500">Qty {quantity}</p>
      ) : (
        maxQuantity !== null && (
          <ProductQuantity
            lineId={lineId}
            quantity={quantity}
            setQuantity={(newQuantity) => updateQuantity(lineId, newQuantity)}
            maxVariantQuantity={maxQuantity}
          />
        )
      )}

      <div className="flex">
        <RemoveCartItem lineId={lineId} />
      </div>
    </div>
  )
}
