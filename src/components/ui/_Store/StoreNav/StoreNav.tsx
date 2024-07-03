'use client'

import { Cart } from '../Cart/Cart'
import { NavLinks } from './NavLinks/NavLinks'
import { NavLogo } from './NavLogo/NavLogo'
import { NavWraper } from './NavWraper/NavWraper'
import { SelectCurrency } from './SelectCurrency/SelectCurrency'

export function StoreNav() {
  return (
    <NavWraper>
      <NavLinks />
      <NavLogo />
      <div className="flex justify-end gap-8 items-center">
        <SelectCurrency />

        <Cart />
      </div>
    </NavWraper>
  )
}
