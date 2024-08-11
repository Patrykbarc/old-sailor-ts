import { CartContextType } from '@/lib/contexts/CartContext'
import { createCart } from './createCart'

type validateCartProps = Pick<CartContextType, 'setCartId' | 'setCartContent'>

export function validateCart({ setCartId, setCartContent }: validateCartProps) {
  const cart = localStorage.getItem('cart')
  if (cart) {
    try {
      const parsedCart = JSON.parse(cart)

      if (!parsedCart.lines || !Array.isArray(parsedCart.lines.edges)) {
        // console.warn('Invalid cart structure, creating a new cart')
        createCart(setCartId, setCartContent)
      } else {
        setCartContent(parsedCart)
        setCartId(parsedCart.id)
      }
    } catch (error) {
      //   console.error('Error parsing cart data from localStorage:', error)
      createCart(setCartId, setCartContent)
    }
  } else {
    createCart(setCartId, setCartContent)
  }
}
