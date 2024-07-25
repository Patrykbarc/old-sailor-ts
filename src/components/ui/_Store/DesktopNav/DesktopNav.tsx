'use client'

import { useStorePathname } from '@/lib/customHooks/useStorePathname'
import { Cart } from '../Cart/Cart'
import { NavLinks } from './NavLinks/NavLinks'
import { NavLogo } from './NavLogo/NavLogo'

export function DesktopNav() {
  const [isCartPage] = useStorePathname()

  return (
    <>
      <NavLinks className="hidden lg:flex" />
      <NavLogo />
      <div className="flex justify-end gap-8 items-center">
        {/* <SelectCurrency /> */}
        {!isCartPage && <Cart />}
      </div>
    </>
  )
}
