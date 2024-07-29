import { CartId, SetCartContent } from '@/lib/contexts/CartContext'
import { updateQuantityMutation } from '@/lib/shopify/mutations/updateQuantityMutation'
import client from '@/lib/shopify/shopifyApi'
import { rollbackUpdateQuantity } from './rollbackUpdateQuantity'

export async function performUpdateQuantity(
  variables: { cartId: CartId; lineId: string; quantity: number },
  lineId: string,
  quantity: number,
  setCartContent: SetCartContent
) {
  try {
    const { data } = await client.request(updateQuantityMutation, { variables })

    if (!data && !data.cartLinesUpdate && !data.cartLinesUpdate.cart) {
      // This implementation assumes the API response matches the local state after the optimistic update
      console.error('Unexpected API response structure:', data)
      // Rollback the optimistic change in case of an unexpected API response
      rollbackUpdateQuantity(lineId, quantity, setCartContent)
    }
  } catch (error) {
    console.error('Error updating cart quantity:', error)
    // Rollback the optimistic change in case of an error
    rollbackUpdateQuantity(lineId, quantity, setCartContent)
  }
}
