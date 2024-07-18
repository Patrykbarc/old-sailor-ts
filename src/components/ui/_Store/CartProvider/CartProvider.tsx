'use client'

import { CartContext, CartContextType } from '@/lib/contexts/CartContext'
import { addToCartMutation } from '@/lib/shopify/mutations/addToCartMutation'
import { createCartMutation } from '@/lib/shopify/mutations/createCartMutation'
import client from '@/lib/shopify/shopifyApi'
import { CartTypes } from '@/lib/types/CartTypes'
import { ReactNode, useEffect, useState } from 'react'

type CartProviderProps = {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartContent, setCartContent] = useState<CartTypes[]>([])
  const [cartId, setCartId] = useState<string | null>(null)

  useEffect(() => {
    async function createCart() {
      try {
        const { data } = await client.request(createCartMutation)
        setCartId(data.cartCreate.cart.id)
        setCartContent(
          data.cartCreate.cart.lines.edges.map((edge: any) => edge.node)
        )
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

  async function addToCart(variantId: string, quantity: number) {
    if (!cartId) return

    const variables = {
      cartId,
      lines: [{ merchandiseId: variantId, quantity }],
    }

    try {
      const { data } = await client.request(addToCartMutation, {variables})

      console.log('API response:', data) // Debugowanie odpowiedzi API
      if (data && data.cartLinesAdd && data.cartLinesAdd.cart) {
        setCartContent(
          data.cartLinesAdd.cart.lines.edges.map((edge: any) => edge.node)
        )
      } else {
        console.error('Unexpected API response structure:', data)
      }
    } catch (error) {
      console.error('Error adding to cart:', error)
    }
  }

  function updateQuantity(merchandiseId: string, quantity: number) {
    setCartContent((prevCartContent) =>
      prevCartContent.map((product) =>
        product.merchandiseId === merchandiseId
          ? { ...product, quantity }
          : product
      )
    )
  }

  const value: CartContextType = {
    cartContent,
    setCartContent,
    addToCart,
    updateQuantity,
    isCartEmpty: cartContent.length === 0,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
