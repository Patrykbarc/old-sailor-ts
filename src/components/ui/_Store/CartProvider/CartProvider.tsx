'use client'

import {
  CartContext,
  CartContextType,
  CartId,
} from '@/lib/contexts/CartContext'
import { addToCart } from '@/lib/functions/cart/addToCart'
import { removeFromCart } from '@/lib/functions/cart/removeFromCart'
import { updateQuantity } from '@/lib/functions/cart/updateQuantity'
import { createCartMutation } from '@/lib/shopify/mutations/createCartMutation'
import client from '@/lib/shopify/shopifyApi'
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
    async function createCart() {
      try {
        const { data } = await client.request(createCartMutation)

        setCartId(data.cartCreate.cart.id)
        setCartContent(data.cartCreate.cart)
      } catch (error) {
        console.error('Error creating cart:', error)
      }
    }

    createCart()
  }, [])

  useEffect(() => {
    if (cartId) {
      localStorage.setItem('cart', JSON.stringify(cartContent))
    }
  }, [cartContent, cartId])

  const handleAddToCart = (variantId: string, quantity: number, href: string) =>
    addToCart(cartId, variantId, quantity, href, setCartContent)

  const handleUpdateQuantity = (lineId: string, quantity: number) =>
    updateQuantity(cartId, lineId, quantity, setCartContent)

  const handleRemoveFromCart = (lineId: string) =>
    removeFromCart(cartId, lineId, setCartContent)

  const value: CartContextType = {
    cartContent,
    setCartContent,
    cartId,
    addToCart: handleAddToCart,
    updateQuantity: handleUpdateQuantity,
    removeFromCart: handleRemoveFromCart,
    isCartEmpty: cartContent.lines.edges.length === 0,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
