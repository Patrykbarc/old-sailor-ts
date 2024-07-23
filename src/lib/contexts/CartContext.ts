import { Dispatch, SetStateAction, createContext } from 'react'
import { Cart } from '../types/cart/Cart'

export type CartId = string | null
export type SetCartContent = Dispatch<SetStateAction<Cart>>
export type SetCartId = Dispatch<SetStateAction<CartId>>

export type CartContextType = {
  cartContent: Cart
  setCartContent: SetCartContent
  cartId: CartId
  setCartId: SetCartId
  addToCart: (merchandiseId: string, quantity: number, href: string) => void
  updateQuantity: (lineId: string, quantity: number) => void
  removeFromCart: (lineId: string) => void
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
  setCartId: initFuncitonState,
  addToCart: initFuncitonState,
  updateQuantity: initFuncitonState,
  removeFromCart: () => {},
  isCartEmpty: true,
})
