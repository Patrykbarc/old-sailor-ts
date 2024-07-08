import { CartContext } from '@/lib/contexts/CartContext'
import { calculateTotalOrderValue } from '@/lib/functions/calculateTotalOrderValue'
import { useContext, useEffect, useState } from 'react'
import { CartSubtotal } from './CartSubtotal/CartSubtotal'
import { GoToCartPageLink } from './GoToCartPageLink/GoToCartPageLink'

export function CartSummary({ isCartPage = false }) {
  const { cartContent } = useContext(CartContext)
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
