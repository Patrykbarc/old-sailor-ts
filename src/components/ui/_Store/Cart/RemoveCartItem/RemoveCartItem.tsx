import { useCart } from '@/lib/customHooks/useCart'

type RemoveCartItemProps = {
  variantId: string
}

export function RemoveCartItem({ variantId }: RemoveCartItemProps) {
  const { setCartContent } = useCart()

  function handleRemoveProduct(id: string) {
    setCartContent((items) => items.filter((item) => item.variantId !== id))
  }

  return (
    <button
      type="button"
      className="font-medium text-indigo-600 hover:text-indigo-500"
      value={variantId}
      onClick={(e) => handleRemoveProduct(e.currentTarget.value)}
    >
      Remove
    </button>
  )
}
