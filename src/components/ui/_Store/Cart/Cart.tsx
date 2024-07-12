import { useCart } from '@/lib/customHooks/useCart'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  Sheet as CartContainer,
  SheetContent as CartContent,
  SheetDescription as CartDescription,
  SheetHeader as CartHeader,
  SheetTitle as CartTitle,
} from '../../Sheet/Sheet'
import { CartProducts } from './CartProducts/CartProducts'
import { CartSummary } from './CartSummary/CartSummary'
import { CartTrigger } from './CartTrigger/CartTrigger'
import { EmptyCart } from './EmptyCart/EmptyCart'

export function Cart() {
  const { isCartEmpty } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => setIsCartOpen(false), [pathname])

  return (
    <CartContainer open={isCartOpen} onOpenChange={setIsCartOpen}>
      <CartTrigger />
      <CartContent className="py-8">
        <CartTitle>Shopping cart</CartTitle>
        <CartDescription />

        {!isCartEmpty ? (
          <>
            <CartHeader className="flex justify-between h-full">
              <CartProducts />
              <CartSummary />
            </CartHeader>
          </>
        ) : (
          <EmptyCart />
        )}
      </CartContent>
    </CartContainer>
  )
}
