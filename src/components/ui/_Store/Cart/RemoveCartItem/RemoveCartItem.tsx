import { useCart } from '@/lib/customHooks/useCart'

type RemoveCartItemProps = {
  lineId: string
}

export function RemoveCartItem({ lineId }: RemoveCartItemProps) {
  const { setCartContent } = useCart()

  function handleRemoveProduct(lineId: string) {
    setCartContent((prevCart) => {
      const updatedEdges = prevCart.lines.edges.filter(
        (edge) => edge.id !== lineId
      )
      return {
        ...prevCart,
        lines: {
          ...prevCart.lines,
          edges: updatedEdges,
        },
      }
    })
  }
  return (
    <button
      type="button"
      className="font-medium text-indigo-600 hover:text-indigo-500"
      value={lineId}
      onClick={(e) => handleRemoveProduct(e.currentTarget.value)}
    >
      Remove
    </button>
  )
}

// setCartContent((items) => items.filter((item) => item.merchandiseId !== id))
