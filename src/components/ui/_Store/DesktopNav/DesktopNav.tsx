'use client'

import { Cart } from '../Cart/Cart'
import { NavLinks } from './NavLinks/NavLinks'
import { NavLogo } from './NavLogo/NavLogo'

export function DesktopNav() {
  return (
    <>
      <NavLinks className="hidden lg:flex" />
      <NavLogo />
      <div className="flex justify-end gap-8 items-center">
        {/* <SelectCurrency /> */}
        <Cart />
      </div>
    </>
  )
}
