import { Wrapper } from '@/components/ui/Wrapper/Wrapper'
import Image from 'next/image'
import { ReactNode } from 'react'
import BACKGROUND_IMAGE from '/public/background-image.png'

type SubpageLayout = {
  children: ReactNode
}

export function SubpageLayout({ children }: SubpageLayout) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-neutral-900 relative overflow-hidden">
      <Wrapper className="flex-col min-h-dvh py-36 relative z-10">
        {children}
      </Wrapper>
      <Image
        className="scale-[160%] md:scale-100 top-1/3 sm:top-0 sm:left-1/3 w-full z-0 absolute pointer-events-none opacity-5 select-none"
        src={BACKGROUND_IMAGE}
        width="1024"
        height="1024"
        alt="placeholder"
      />
    </main>
  )
}
