'use client'

import { Wrapper } from '@/components/ui/Wrapper/Wrapper'
import { Separator } from '@radix-ui/react-separator'
import { FooterAddress } from './FooterAddress/FooterAddress'
import { FooterCredits } from './FooterCredits/FooterCredits'
import { FooterLinks } from './FooterLinks/FooterLinks'
import { FooterLogo } from './FooterLogo/FooterLogo'

export function Footer() {
  return (
    <footer className="w-full bg-neutral-950 py-8">
      <Wrapper className="justify-between flex-col md:flex-row mx-auto items-center">
        <FooterLogo />
        <div className="flex flex-col gap-2">
          <FooterLinks />
          <Separator className="my-3 md:my-0.5 bg-neutral-800 w-full h-[1px]" />
          <FooterAddress />
        </div>
      </Wrapper>
      <FooterCredits />
    </footer>
  )
}
