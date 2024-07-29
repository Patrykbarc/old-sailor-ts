import { CartId, SetCartContent } from '@/lib/contexts/CartContext'
import { debounce } from '../../debounce'
import { performUpdateQuantity } from './performUpdateQuantity'

export async function updateQuantity(
  cartId: CartId,
  lineId: string,
  quantity: number,
  setCartContent: SetCartContent
) {
  if (!cartId) return

  const variables = {
    cartId,
    lineId,
    quantity,
  }

  // Optimistic update of local state
  setCartContent((prevState) => {
    const updatedEdges = prevState.lines.edges.map((edge) => {
      if (edge.id === lineId) {
        return {
          ...edge,
          quantity,
        }
      }
      return edge
    })

    return {
      ...prevState,
      lines: {
        edges: updatedEdges,
      },
    }
  })

  debouncedUpdateQuantity(variables, lineId, quantity, setCartContent)
}

const debouncedUpdateQuantity = debounce(performUpdateQuantity, 300)
