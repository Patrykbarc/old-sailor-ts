import { RemoveCartItem } from '../../RemoveCartItem/RemoveCartItem'

type CartProductActionsProps = {
  productId: string
  quantity: number
}

export function CartProductActions({productId, quantity }: CartProductActionsProps) {
  return (
    <div className="flex flex-1 items-end justify-between text-sm">
      <p className="text-neutral-500">Qty {quantity}</p>

      <div className="flex">
        <RemoveCartItem productId={productId} />
      </div>
    </div>
  )
}
