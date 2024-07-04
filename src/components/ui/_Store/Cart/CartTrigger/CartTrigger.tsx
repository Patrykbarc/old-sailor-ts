import { SheetTrigger } from '@/components/ui/Sheet/Sheet'
import { CartContext } from '@/lib/contexts/CartContext'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { CartProductsBadge } from '../CartProductsBadge/CartProductsBadge'

export function CartTrigger() {
  const { cartContent, isCartEmpty } = useContext(CartContext)

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
