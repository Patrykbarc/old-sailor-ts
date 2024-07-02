'use client'

import { Wrapper } from '@/components/ui/Wrapper/Wrapper'
import { debounce } from '@/lib/functions/debounce'
import { NavigationProps } from '@/lib/types/singleTypes/NavigationPropsType'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NavLinks } from '../../NavLinks/NavLinks'
import LOGO from '/public/old-sailor-logo-horizontal.png'

const navStyles =
  'fixed z-10 w-full hover:opacity-100 hover:py-5 duration-500 ease-in-out lg:block transition-all backdrop-blur-md'
const visibleNavStyles = 'opacity-100 py-5 shadow-xl'
const notVisibleNavStyles = 'opacity-85 py-2'

export function DesktopNav({ className }: NavigationProps) {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (typeof window !== undefined) {
      setPrevScrollPos(window.scrollY)
    }

    function handleScroll() {
      const currentScrollPos = window.scrollY
      setVisible(prevScrollPos > currentScrollPos)
      setPrevScrollPos(currentScrollPos)
    }

    const debouncedHandleScroll = debounce(handleScroll, 100)

    window.addEventListener('scroll', debouncedHandleScroll)

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll)
    }
  }, [prevScrollPos])

  // TODO: make navlinks padding more user-friendly

  return (
    <nav
      className={` ${navStyles} ${className} ${
        visible ? visibleNavStyles : notVisibleNavStyles
      }`}
    >
      <Wrapper className="justify-between flex-col md:flex-row mx-auto items-center">
        <Link href={'/'}>
          <Image alt="Old Sailor Barber logo" src={LOGO} />
        </Link>
        <div className="flex gap-3">
          <NavLinks className="text-lg" />
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
