import { Button } from '@/components/ui/Button/Button'
import { CartContext } from '@/lib/contexts/CartContext'
import { formatPrice } from '@/lib/functions/formatPrice'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'

export function CartSummary() {
  const { cartContent, isCartEmpty } = useContext(CartContext)
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
        <Link href="/store/checkout">
          <Button className="w-full" size="xl">
            Checkout
          </Button>
        </Link>
      </div>

      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
        <p>
          or{' '}
          <Link
            href={'/store/cart'}
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Show Summary
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </p>
      </div>
    </div>
  )
}
