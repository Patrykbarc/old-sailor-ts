'use client'

import {
  CartContext,
  CartContextType,
  CartId,
} from '@/lib/contexts/CartContext'
import { addToCart } from '@/lib/functions/cart/addToCart/addToCart'
import { validateCart } from '@/lib/functions/cart/createCart/validateCart'
import { removeFromCart } from '@/lib/functions/cart/removeFromCart/removeFromCart'
import { updateQuantity } from '@/lib/functions/cart/updateQuantity/updateQuantity'
import { Cart } from '@/lib/types/cart/Cart'
import { ReactNode, useEffect, useState } from 'react'

type CartProviderProps = {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartContent, setCartContent] = useState<Cart>({
    id: '',
    checkoutUrl: '',
    lines: { edges: [] },
  })
  const [cartId, setCartId] = useState<CartId>(null)

  useEffect(() => {
    validateCart({ setCartId, setCartContent })
  }, [])

  useEffect(() => {
    if (cartId && cartContent.id) {
      localStorage.setItem('cart', JSON.stringify(cartContent))
    }
  }, [cartContent, cartId])

  const handleAddToCart = (variantId: string, quantity: number, href: string) =>
    addToCart(cartId, variantId, quantity, href, setCartContent)

  const handleUpdateQuantity = (lineId: string, quantity: number) =>
    updateQuantity(cartId, lineId, quantity, setCartContent)

  const handleRemoveFromCart = (lineId: string) =>
    removeFromCart(cartId, lineId, setCartContent)

  const isCartEmpty = cartContent.lines.edges.length === 0

  const value: CartContextType = {
    cartContent,
    setCartContent,
    cartId,
    setCartId,
    addToCart: handleAddToCart,
    updateQuantity: handleUpdateQuantity,
    removeFromCart: handleRemoveFromCart,
    isCartEmpty: isCartEmpty,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
