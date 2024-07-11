import { CartContext } from '@/lib/contexts/CartContext'
import { useStorePathname } from '@/lib/customHooks/useStorePathname'
import { useContext } from 'react'
import { ProductQuantity } from '../../../Product/ProductInfo/ProductQuantity/ProductQuantity'
import { RemoveCartItem } from '../../RemoveCartItem/RemoveCartItem'

type CartProductActionsProps = {
  productId: string
  quantity: number
}

export function CartProductActions({
  productId,
  quantity,
}: CartProductActionsProps) {
  const [isCartPage] = useStorePathname()
  const { updateQuantity } = useContext(CartContext)

  return (
    <div className="flex flex-1 items-end justify-between text-sm">
      {!isCartPage ? (
        <p className="text-neutral-500">Qty {quantity}</p>
      ) : (
        <ProductQuantity
          productId={productId}
          quantity={quantity}
          setQuantity={(newQuantity) => updateQuantity(productId, newQuantity)}
        />
      )}

      <div className="flex">
        <RemoveCartItem productId={productId} />
      </div>
    </div>
  )
}
