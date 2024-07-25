import { SheetTrigger } from '@/components/ui/Sheet/Sheet'
import { useCart } from '@/lib/customHooks/useCart'
import { Bars3Icon } from '@heroicons/react/24/solid'

export function NavTrigger() {
  const { cartContent, isCartEmpty } = useCart()
  const productsAmount = cartContent?.lines?.edges.length

  return (
    <SheetTrigger>
      <Bars3Icon className="size-9 cursor-pointer" />
    </SheetTrigger>
  )
}
