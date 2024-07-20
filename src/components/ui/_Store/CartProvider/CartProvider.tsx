'use client'

import {
  CartContext,
  CartContextType,
  CartId,
} from '@/lib/contexts/CartContext'
import { addToCartMutation } from '@/lib/shopify/mutations/addToCartMutation'
import { createCartMutation } from '@/lib/shopify/mutations/createCartMutation'
import { updateQuantityMutation } from '@/lib/shopify/mutations/updateQuantityMutation'
import client from '@/lib/shopify/shopifyApi'
import { CartTypes } from '@/lib/types/CartTypes'
import { ReactNode, useEffect, useState } from 'react'

type CartProviderProps = {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartContent, setCartContent] = useState<CartTypes[]>([])
  const [cartId, setCartId] = useState<CartId>(null)

  useEffect(() => {
    async function createCart() {
      try {
        const { data } = await client.request(createCartMutation)

        setCartId(data.cartCreate.cart.id)
        setCartContent(data.cartCreate)
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

  async function addToCart(variantId: string, quantity: number, href: string) {
    if (!cartId) return

    const variables = {
      cartId,
      lines: [{ merchandiseId: variantId, quantity }],
    }

    try {
      const { data } = await client.request(addToCartMutation, { variables })

      if (data && data.cartLinesAdd && data.cartLinesAdd.cart) {
        setCartContent((prevState) => ({
          ...prevState,
          cart: {
            ...prevState.cart,
            lines: {
              ...prevState.cart.lines,
              edges: [
                ...data.cartLinesAdd.cart.lines.edges.map((edge: any) => ({
                  ...edge.node,
                  href: href,
                  merchandiseId: edge.node.merchandise.id,
                })),
              ],
            },
          },
        }))
      } else {
        console.error('Unexpected API response structure:', data)
      }
    } catch (error) {
      console.error('Error adding to cart:', error)
    }
  }

  async function updateQuantity(lineId: string, quantity: number) {
    if (!cartId) return

    const variables = {
      cartId: cartId,
      lineId: lineId,
      quantity: quantity,
    }

    try {
      const { data } = await client.request(updateQuantityMutation, {
        variables,
      })

      if (data && data.cartLinesUpdate && data.cartLinesUpdate.cart) {
        setCartContent((prevState) => {
          const updatedEdges = prevState.cart.lines.edges.map((edge) => {
            if (edge.id === lineId) {
              const updatedEdge = {
                ...edge,
                quantity: quantity,
                node: {
                  ...edge.node,
                  quantity: quantity,
                },
              }

              return updatedEdge
            }
            return edge
          })

          const updatedCart = {
            ...prevState,
            cart: {
              ...prevState.cart,
              lines: {
                ...prevState.cart.lines,
                edges: updatedEdges,
              },
            },
          }
          return updatedCart
        })
      } else {
        console.error('Unexpected API response structure:', data)
      }
    } catch (error) {
      console.error('Error updating cart quantity:', error)
    }
  }

  const isCartEmpty = !cartContent.cart?.lines?.edges?.length

  const value: CartContextType = {
    cartContent: cartContent.cart,
    setCartContent,
    cartId,
    addToCart,
    updateQuantity,
    isCartEmpty: isCartEmpty,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
