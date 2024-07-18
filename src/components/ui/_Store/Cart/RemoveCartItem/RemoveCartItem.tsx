import { useCart } from '@/lib/customHooks/useCart'

type RemoveCartItemProps = {
  merchandiseId: string
}

export function RemoveCartItem({ merchandiseId }: RemoveCartItemProps) {
  const { setCartContent } = useCart()

  function handleRemoveProduct(id: string) {
    setCartContent((items) => items.filter((item) => item.merchandiseId !== id))
  }

  return (
    <button
      type="button"
      className="font-medium text-indigo-600 hover:text-indigo-500"
      value={merchandiseId}
      onClick={(e) => handleRemoveProduct(e.currentTarget.value)}
    >
      Remove
    </button>
  )
}
