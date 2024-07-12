import { SheetTrigger } from '@/components/ui/Sheet/Sheet'
import { useCart } from '@/lib/customHooks/useCart'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { CartProductsBadge } from '../CartProductsBadge/CartProductsBadge'

export function CartTrigger() {
  const { cartContent, isCartEmpty } = useCart()

  return (
    <SheetTrigger>
      <div className="relative">
        <ShoppingBagIcon className="size-8 cursor-pointer" />
        {!isCartEmpty && (
          <CartProductsBadge productsAmount={cartContent.length} />
        )}
      </div>
    </SheetTrigger>
  )
}
