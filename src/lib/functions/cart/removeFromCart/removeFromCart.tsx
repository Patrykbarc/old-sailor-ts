import { CartId, SetCartContent } from '@/lib/contexts/CartContext'
import { removeFromCartMutation } from '@/lib/shopify/mutations/removeFromCartMutation'
import client from '@/lib/shopify/shopifyApi'
import { rollbackRemove } from './removeFromCartRollback'

export async function removeFromCart(
  cartId: CartId,
  lineId: string,
  setCartContent: SetCartContent
) {
  if (!cartId) return

  const variables = {
    cartId,
    lineId,
  }

  let originalEdge

  // Optimistic update of local state
  setCartContent((prevState) => {
    originalEdge = prevState.lines.edges.find((edge) => edge.id === lineId)
    const updatedEdges = prevState.lines.edges.filter(
      (edge) => edge.id !== lineId
    )

    return {
      ...prevState,
      lines: {
        edges: updatedEdges,
      },
    }
  })

  try {
    const { data } = await client.request(removeFromCartMutation, {
      variables,
    })

    if (!data && !data.cartLinesRemove && !data.cartLinesRemove.cart) {
      rollbackRemove(originalEdge, setCartContent)
      console.error('Unexpected API response structure:', data)
    }
  } catch (error) {
    rollbackRemove(originalEdge, setCartContent)
    console.error('Error removing from cart:', error)
  }
}
