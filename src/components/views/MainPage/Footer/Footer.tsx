'use client'

import { NavLinks } from '@/components/ui/NavLinks/NavLinks'
import { Wrapper } from '@/components/ui/Wrapper/Wrapper'
import { Separator } from '@radix-ui/react-separator'
import Image from 'next/image'
import Link from 'next/link'
import LOGO from '/public/old-sailor-logo-vertical.png'

export function Footer() {
  return (
    <footer className="w-full bg-neutral-950 py-8">
      <Wrapper className="justify-between flex-col md:flex-row mx-auto items-center">
        <Image
          className="h-fit mb-8 md:mb-0"
          height={92}
          width={107}
          src={LOGO}
          alt="Old Sailor Barber logo"
        />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col md:flex-row text-center md:gap-3 text-lg">
            <Link
              className="hover:text-primary transition-colors capitalize"
              href="/privacy-policy"
            >
              privacy policy
            </Link>
            <NavLinks />
          </div>
          <Separator className="my-3 md:my-0.5 bg-neutral-800 w-full h-[1px]" />
          <address className="flex flex-col text-center md:text-end text-sm not-italic">
            <p>Parkside Street 41</p>
            <a href="tel:+48100200300">+48 100 200 300</a>
            <a href="mailto:old.sailor@barber.com">old.sailor@barber.com</a>
          </address>
        </div>
      </Wrapper>
      <div className="flex flex-col text-center w-full mt-5 text-neutral-600">
        <small>© 2024 | The Old Sailor Barber</small>
        <small>Designed & developed by Patryk Barć</small>
      </div>
    </footer>
  )
}
