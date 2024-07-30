'use client'

import { Wrapper } from '@/components/ui/Wrapper/Wrapper'
import { MAIN_NAV_LINKS } from '@/lib/constants/links/main-nav-links'
import { NavigationProps } from '@/lib/types/common/NavigationProps'
import Image from 'next/image'
import Link from 'next/link'
import { NavLinks } from '../../NavLinks/NavLinks'
import LOGO from '/public/old-sailor-logo-horizontal.png'

const navStyles =
  'fixed z-10 w-full duration-500 ease-in-out lg:block transition-all opacity-100 py-5 shadow-xl backdrop-blur-md'

export function DesktopNav({ className }: NavigationProps) {
  return (
    <nav className={` ${navStyles} ${className}`}>
      <Wrapper className="justify-between flex-col md:flex-row mx-auto items-center">
        <Link href={'/'}>
          <Image alt="Old Sailor Barber logo" src={LOGO} />
        </Link>
        <div className="flex gap-3">
          <NavLinks links={MAIN_NAV_LINKS} className="text-lg" />
        </div>
        <address className="not-italic">
          <a
            className="text-primary hover:text-primary-foreground"
            href="tel:+48100200300"
          >
            +48 100 200 300
          </a>
        </address>
      </Wrapper>
    </nav>
  )
}
