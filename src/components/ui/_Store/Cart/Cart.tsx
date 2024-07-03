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

export function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => setIsCartOpen(false), [pathname])

  return (
    <CartContainer open={isCartOpen} onOpenChange={setIsCartOpen}>
      <CartTrigger />
      <CartContent className="py-8">
        <CartTitle>Shopping cart</CartTitle>

        <CartHeader className="flex justify-between h-full">
          <CartProducts />
          <CartSummary />
          <CartDescription />
        </CartHeader>
      </CartContent>
    </CartContainer>
  )
}
