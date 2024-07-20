import { useCart } from '@/lib/customHooks/useCart'
import { useStorePathname } from '@/lib/customHooks/useStorePathname'
import { ProductQuantity } from '../../../Product/ProductInfo/ProductQuantity/ProductQuantity'
import { RemoveCartItem } from '../../RemoveCartItem/RemoveCartItem'

type CartProductActionsProps = {
  lineId: string
  quantity: number
}

export function CartProductActions({
  lineId,
  quantity,
}: CartProductActionsProps) {
  const [isCartPage] = useStorePathname()
  const { updateQuantity } = useCart()

  return (
    <div className="flex flex-1 items-end justify-between text-sm">
      {!isCartPage ? (
        <p className="text-neutral-500">Qty {quantity}</p>
      ) : (
        <ProductQuantity
          lineId={lineId}
          quantity={quantity}
          setQuantity={(newQuantity) => updateQuantity(lineId, newQuantity)}
        />
      )}

      <div className="flex">
        <RemoveCartItem merchandiseId={lineId} />
      </div>
    </div>
  )
}
