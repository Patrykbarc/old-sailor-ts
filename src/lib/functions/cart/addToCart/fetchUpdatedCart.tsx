import { CartId } from "@/lib/contexts/CartContext"
import { addToCartMutation } from "@/lib/shopify/mutations/addToCartMutation"
import client from "@/lib/shopify/shopifyApi"

export async function fetchUpdatedCart(
    cartId: CartId,
    variantId: string,
    quantity: number
  ) {
    const variables = {
      cartId,
      lines: [{ merchandiseId: variantId, quantity }],
    }
  
    const { data } = await client.request(addToCartMutation, { variables })
    return data
  }
  