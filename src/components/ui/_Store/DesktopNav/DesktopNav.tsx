'use client'

import { useCartPathname } from '@/lib/customHooks/useCartPathname'
import { Cart } from '../Cart/Cart'
import { NavLinks } from './NavLinks/NavLinks'
import { NavLogo } from './NavLogo/NavLogo'

export function DesktopNav() {
  const [isCartPage] = useCartPathname()

  return (
    <>
      <NavLinks className="hidden lg:flex" />
      <NavLogo />
      <div className="flex justify-end gap-8 items-center">
        {!isCartPage && <Cart />}
      </div>
    </>
  )
}
