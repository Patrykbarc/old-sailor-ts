'use client'

import { useStorePathname } from '@/lib/customHooks/useStorePathname'
import { Cart } from '../Cart/Cart'
import { NavLinks } from './NavLinks/NavLinks'
import { NavLogo } from './NavLogo/NavLogo'
import { NavWraper } from './NavWraper/NavWraper'
import { SelectCurrency } from './SelectCurrency/SelectCurrency'

export function StoreNav() {
  const [isCartPage] = useStorePathname()

  return (
    <NavWraper>
      <NavLinks />
      <NavLogo />
      <div className="flex justify-end gap-8 items-center">
        <SelectCurrency />
        {!isCartPage && <Cart />}
      </div>
    </NavWraper>
  )
}
