import { useCart } from '@/lib/customHooks/useCart'

type RemoveCartItemProps = {
  productId: string
}

export function RemoveCartItem({ productId }: RemoveCartItemProps) {
  const { setCartContent } = useCart()

  function handleRemoveProduct(id: string) {
    setCartContent((items) => items.filter((item) => item.id !== id))
  }

  return (
    <button
      type="button"
      className="font-medium text-indigo-600 hover:text-indigo-500"
      value={productId}
      onClick={(e) => handleRemoveProduct(e.currentTarget.value)}
    >
      Remove
    </button>
  )
}
