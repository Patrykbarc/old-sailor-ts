import { CartId, SetCartContent } from '@/lib/contexts/CartContext'
import { updateQuantityMutation } from '@/lib/shopify/mutations/updateQuantityMutation'
import client from '@/lib/shopify/shopifyApi'

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

  try {
    const { data } = await client.request(updateQuantityMutation, { variables })

    if (data && data.cartLinesUpdate && data.cartLinesUpdate.cart) {
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
    } else {
      console.error('Unexpected API response structure:', data)
    }
  } catch (error) {
    console.error('Error updating cart quantity:', error)
  }
}
