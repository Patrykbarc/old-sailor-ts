import { SheetTrigger } from '@/components/ui/Sheet/Sheet'
import { Bars3Icon } from '@heroicons/react/24/solid'

export function NavTrigger() {
  return (
    <SheetTrigger>
      <Bars3Icon className="size-9 cursor-pointer" />
    </SheetTrigger>
  )
}
