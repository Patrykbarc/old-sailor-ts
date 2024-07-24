import { CartId, SetCartContent } from '@/lib/contexts/CartContext'
import { removeFromCartMutation } from '@/lib/shopify/mutations/removeFromCartMutation'
import client from '@/lib/shopify/shopifyApi'

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

  try {
    const { data } = await client.request(removeFromCartMutation, {
      variables,
    })

    if (data && data.cartLinesRemove && data.cartLinesRemove.cart) {
      setCartContent((prevState) => {
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
    } else {
      console.error('Unexpected API response structure:', data)
    }
  } catch (error) {
    console.error('Error removing from cart:', error)
  }
}
