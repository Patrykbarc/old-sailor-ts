import { NavLinks } from '@/components/ui/_Store/DesktopNav/NavLinks/NavLinks'
import { NavigationProps } from '@/lib/types/common/NavigationProps'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  Sheet as NavContainer,
  SheetContent as NavContent,
  SheetDescription as NavDescription,
  SheetHeader as NavHeader,
  SheetTitle as NavTitle,
} from '../../Sheet/Sheet'
import { NavLogo } from '../DesktopNav/NavLogo/NavLogo'
import { NavTrigger } from './NavTrigger/NavTrigger'

export function MobileNav({ className }: NavigationProps) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => setIsCartOpen(false), [pathname])

  return (
    <div className={`${className}`}>
      <NavContainer open={isCartOpen} onOpenChange={setIsCartOpen}>
        <NavTrigger />
        <NavContent className="py-8" side="left">
          <NavTitle>
            <NavLogo />
          </NavTitle>
          <NavDescription />

          <NavHeader className="flex justify-center h-full">
            <NavLinks className="flex-col text-2xl text-neutral-900 text-left" />
          </NavHeader>
        </NavContent>
      </NavContainer>
    </div>
  )
}
