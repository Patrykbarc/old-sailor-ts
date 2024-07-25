'use client'

import {
  CartContext,
  CartContextType,
  CartId,
} from '@/lib/contexts/CartContext'
import { addToCart } from '@/lib/functions/cart/addToCart/addToCart'
import { createCart } from '@/lib/functions/cart/createCart'
import { removeFromCart } from '@/lib/functions/cart/removeFromCart'
import { updateQuantity } from '@/lib/functions/cart/updateQuantity'
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
    function checkCartExist() {
      const cart = localStorage.getItem('cart')
      if (cart) {
        try {
          const parsedCart = JSON.parse(cart)
          setCartContent(parsedCart)
          setCartId(parsedCart.id)
        } catch (error) {
          console.error('Invalid cart data in localStorage:', error)
          createCart(setCartId, setCartContent)
        }
      } else {
        createCart(setCartId, setCartContent)
      }
    }

    checkCartExist()
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
