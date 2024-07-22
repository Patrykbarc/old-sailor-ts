import { CartContextType, CartId } from '@/lib/contexts/CartContext'
import { addToCartMutation } from '@/lib/shopify/mutations/addToCartMutation'
import client from '@/lib/shopify/shopifyApi'

type SetCartContentType = Pick<
  CartContextType,
  'setCartContent'
>['setCartContent']

export async function addToCart(
  cartId: CartId,
  variantId: string,
  quantity: number,
  href: string,
  setCartContent: SetCartContentType
) {
  if (!cartId) return

  const variables = {
    cartId,
    lines: [{ merchandiseId: variantId, quantity }],
  }

  try {
    const { data } = await client.request(addToCartMutation, { variables })

    console.log('Response from addToCartMutation:', data)

    if (data && data.cartLinesAdd && data.cartLinesAdd.cart) {
      const edges = data.cartLinesAdd.cart.lines.edges

      if (!Array.isArray(edges)) {
        console.error(
          'Unexpected API response structure: edges is not an array',
          edges
        )
        return
      }

      setCartContent((prevState) => {
        const updatedEdges = edges.map((edge) => {
          if (
            !edge.node ||
            !edge.node.merchandise ||
            !edge.node.merchandise.id
          ) {
            console.error('Invalid edge structure', edge)
            return edge
          }

          return {
            ...edge.node,
            href,
            merchandiseId: edge.node.merchandise.id,
          }
        })

        console.log('Updated edges:', updatedEdges)

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
    console.error('Error adding to cart:', error)
  }
}
