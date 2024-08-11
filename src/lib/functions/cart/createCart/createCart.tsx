import { SetCartContent, SetCartId } from '@/lib/contexts/CartContext'
import { createCartMutation } from '@/lib/shopify/mutations/createCartMutation'
import client from '@/lib/shopify/shopifyApi'

export async function createCart(
  setCartId: SetCartId,
  setCartContent: SetCartContent
) {
  try {
    const {
      data: { cartCreate },
    } = await client.request(createCartMutation)

    setCartId(cartCreate.cart.id)
    setCartContent(cartCreate.cart)
  } catch (error) {
    console.error('Error creating cart:', error)
  }
}
