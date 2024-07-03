import { CartContext } from '@/lib/contexts/CartContext'
import { formatPrice } from '@/lib/functions/formatPrice'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'

export function CartSummary() {
  const { cartContent } = useContext(CartContext)
  const [cartValue, setCartValue] = useState(0)

  useEffect(() => {
    const totalValue = cartContent.reduce((acc, product) => {
      return (
        acc + product.priceRangeV2.minVariantPrice.amount * product.quantity
      )
    }, 0)

    setCartValue(Number(totalValue))
  }, [cartContent])

  return (
    <div className="border-t border-gray-200 py-6">
      <div className="flex justify-between text-base font-medium text-neutral-900">
        <p>Subtotal</p>
        <p>{formatPrice(cartValue)}</p>
      </div>
      <p className="mt-0.5 text-sm text-neutral-500">
        Shipping and taxes calculated at checkout.
      </p>

      <div className="mt-6">
        <Link
          href="#"
          className="flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-neutral-800 shadow-sm hover:bg-primary-foreground"
        >
          Checkout
        </Link>
      </div>
    </div>
  )
}
