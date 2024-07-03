import { Dispatch, SetStateAction, createContext } from 'react'
import { CartTypes } from '../types/CartTypes'

export type CartContextType = {
  cartContent: CartTypes[]
  setCartContent: Dispatch<SetStateAction<CartTypes[]>>
}

export const CartContext = createContext<CartContextType>({
  cartContent: [],
  setCartContent: () => {},
})
