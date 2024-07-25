'use client'

import { DesktopNav } from '@/components/ui/_Store/DesktopNav/DesktopNav'
import { NavWraper } from '@/components/ui/_Store/DesktopNav/NavWraper/NavWraper'
import { MobileNav } from '@/components/ui/_Store/MobileNav/MobileNav'

export function Navigation() {
  return (
    <div className="relative z-50">
      <NavWraper>
        <MobileNav className="lg:hidden" />
        <DesktopNav />
      </NavWraper>
    </div>
  )
}
