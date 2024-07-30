import { CartId, SetCartContent } from '@/lib/contexts/CartContext'
import toast from 'react-hot-toast'
import { fetchUpdatedCart } from './fetchUpdatedCart'
import { updateCartContent } from './updateCartContent'

export type CartLine = {
  node: {
    merchandise: {
      id: string
    }
    [key: string]: any
  }
  [key: string]: any
}

type CartData = {
  cartLinesAdd: {
    cart: {
      lines: {
        edges: CartLine[]
      }
    }
  }
}

export async function addToCart(
  cartId: CartId,
  variantId: string,
  quantity: number,
  href: string,
  setCartContent: SetCartContent
) {
  if (!cartId) return

  try {
    const data: CartData = await fetchUpdatedCart(cartId, variantId, quantity)

    if (data && data.cartLinesAdd && data.cartLinesAdd.cart) {
      const newEdges = data.cartLinesAdd.cart.lines.edges

      if (!Array.isArray(newEdges)) {
        console.error(
          'Unexpected API response structure: edges is not an array',
          newEdges
        )
        return
      }

      setCartContent((prevState) =>
        updateCartContent(prevState, newEdges, variantId, href)
      )

      toast.success('Product Added to Your Cart')
    } else {
      console.error('Unexpected API response structure:', data)
    }
  } catch (error) {
    console.error('Error adding to cart:', error)
    toast.error('Something went wrong.\nPlease try again.')
  }
}
