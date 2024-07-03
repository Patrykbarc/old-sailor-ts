'use client'

import { Cart } from '../Cart/Cart'
import { Logo } from './Logo/Logo'
import { NavLinks } from './NavLinks/NavLinks'
import { NavWraper } from './NavWraper/NavWraper'
import { SelectCurrency } from './SelectCurrency/SelectCurrency'

export function StoreNav() {
  return (
    <NavWraper>
      <NavLinks />
      <Logo />
      <div className="flex justify-end gap-8 items-center">
        <SelectCurrency />

        <Cart />
      </div>
    </NavWraper>
  )
}
