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
  return (
    <CartContainer>
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
