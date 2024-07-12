import { useCart } from '@/lib/customHooks/useCart'
import { useStorePathname } from '@/lib/customHooks/useStorePathname'
import { ProductQuantity } from '../../../Product/ProductInfo/ProductQuantity/ProductQuantity'
import { RemoveCartItem } from '../../RemoveCartItem/RemoveCartItem'

type CartProductActionsProps = {
  variantId: string
  quantity: number
}

export function CartProductActions({
  variantId,
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
          variantId={variantId}
          quantity={quantity}
          setQuantity={(newQuantity) => updateQuantity(variantId, newQuantity)}
        />
      )}

      <div className="flex">
        <RemoveCartItem variantId={variantId} />
      </div>
    </div>
  )
}
