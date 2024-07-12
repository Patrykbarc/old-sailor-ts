import { useCart } from '@/lib/customHooks/useCart'
import { calculateTotalOrderValue } from '@/lib/functions/calculateTotalOrderValue'
import { useEffect, useState } from 'react'
import { CartSubtotal } from './CartSubtotal/CartSubtotal'
import { GoToCartPageLink } from './GoToCartPageLink/GoToCartPageLink'

export function CartSummary({ isCartPage = false }) {
  const { cartContent } = useCart()
  const [cartValue, setCartValue] = useState(0)

  useEffect(() => {
    const totalValue = calculateTotalOrderValue(cartContent)
    setCartValue(Number(totalValue))
  }, [cartContent])

  return (
    <div className={`border-gray-200 ${!isCartPage ? 'border-t py-6' : ''}`}>
      <CartSubtotal cartValue={cartValue} />
      {!isCartPage && <GoToCartPageLink />}
    </div>
  )
}
