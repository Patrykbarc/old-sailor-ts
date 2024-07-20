import { SheetTrigger } from '@/components/ui/Sheet/Sheet'
import { useCart } from '@/lib/customHooks/useCart'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { CartProductsBadge } from '../CartProductsBadge/CartProductsBadge'

export function CartTrigger() {
  const { cartContent, isCartEmpty } = useCart()
  const productsAmount = cartContent?.lines?.edges.length

  return (
    <SheetTrigger>
      <div className="relative">
        <ShoppingBagIcon className="size-8 cursor-pointer" />
        {!isCartEmpty && productsAmount > 0 && (
          <CartProductsBadge productsAmount={productsAmount} />
        )}
      </div>
    </SheetTrigger>
  )
}
