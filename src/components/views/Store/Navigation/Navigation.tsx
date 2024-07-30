'use client'

import { DesktopNav } from '@/components/ui/_Store/DesktopNav/DesktopNav'
import { NavWraper } from '@/components/ui/_Store/DesktopNav/NavWraper/NavWraper'
import { MobileNav } from '@/components/ui/_Store/MobileNav/MobileNav'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const pathname = usePathname()

  const isStorePathname = pathname === '/store'
  const navStoreStyle = isStorePathname ? 'fixed w-full' : 'relative'

  return (
    <div className={`${navStoreStyle} z-50`}>
      <NavWraper className={isStorePathname ? 'bg-opacity-50' : ''}>
        <MobileNav className="lg:hidden" />
        <DesktopNav />
      </NavWraper>
    </div>
  )
}
