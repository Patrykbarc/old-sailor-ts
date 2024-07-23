import { useCart } from '@/lib/customHooks/useCart'

type RemoveCartItemProps = {
  lineId: string
}

export function RemoveCartItem({ lineId }: RemoveCartItemProps) {
  const { removeFromCart } = useCart()

  return (
    <button
      type="button"
      className="font-medium text-indigo-600 hover:text-indigo-500"
      value={lineId}
      onClick={(e) => removeFromCart(e.currentTarget.value)}
    >
      Remove
    </button>
  )
}
