'use client'

import Image from 'next/image'
import Link from 'next/link'
import LOGO from '/public/old-sailor-logo-horizontal.png'
import { NavLinks } from '../NavLinks/NavLinks'
import { Wrapper } from '../Wrapper/Wrapper'

import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { NavigationProps } from '@/lib/types/types'

export function MobileNav({ className }: NavigationProps) {
  const [isNavHidden, setIsNavHidden] = useState(false)

  function handleSetIsNavHidden() {
    setIsNavHidden(!isNavHidden)
  }

  useEffect(() => {
    const body = document.body

    isNavHidden
      ? body.classList.add('overflow-y-hidden')
      : body.classList.remove('overflow-y-hidden')
  }, [isNavHidden])

  return (
    <nav className={`${className}`}>
      {!isNavHidden ? (
        <div
          className="z-50 fixed m-4 right-0 size-16 cursor-pointer"
          onClick={handleSetIsNavHidden}
        >
          <Bars3Icon />
        </div>
      ) : (
        <div
          className="fixed z-50 mt-4 m-4 right-0 size-16 cursor-pointer"
          onClick={handleSetIsNavHidden}
        >
          <XMarkIcon />
        </div>
      )}
      <div
        className={`overflow-hidden fixed h-dvh w-dvw top-0 z-40 bg-neutral-900 transition-all text-end ${
          !isNavHidden ? 'right-full' : 'right-0'
        }`}
        onClick={handleSetIsNavHidden}
      >
        <Wrapper className="flex-col h-full justify-between py-8">
          <Link href={'/'}>
            <Image alt="Old Sailor Barber logo" src={LOGO} />
          </Link>
          <div className="text-5xl flex flex-col gap-6">
            <NavLinks />
          </div>
          <address className="not-italic">
            <a
              className="text-primary hover:text-primary-foreground text-2xl"
              href="tel:+48100200300"
            >
              +48 100 200 300
            </a>
          </address>
        </Wrapper>
      </div>
    </nav>
  )
}
