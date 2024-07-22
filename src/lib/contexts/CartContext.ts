import { Dispatch, SetStateAction, createContext } from 'react'
import { Cart } from '../types/cart/Cart'

export type CartId = string | null

export type CartContextType = {
  cartContent: Cart
  setCartContent: Dispatch<SetStateAction<Cart>>
  cartId: CartId
  addToCart: (merchandiseId: string, quantity: number, href: string) => void
  updateQuantity: (lineId: string, quantity: number) => void
  isCartEmpty: boolean
}

const initFuncitonState = () => {}

export const CartContext = createContext<CartContextType>({
  cartContent: {
    id: '',
    checkoutUrl: '',
    lines: { edges: [] },
  },
  setCartContent: initFuncitonState,
  cartId: null,
  addToCart: initFuncitonState,
  updateQuantity: initFuncitonState,
  isCartEmpty: true,
})
