import { SheetTrigger } from '@/components/ui/Sheet/Sheet'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

export function CartTrigger() {
  return (
    <SheetTrigger>
      <ShoppingBagIcon className="size-8 cursor-pointer" />
    </SheetTrigger>
  )
}
