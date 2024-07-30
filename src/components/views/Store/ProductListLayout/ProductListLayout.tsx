import { Wrapper } from '@/components/ui/Wrapper/Wrapper'
import { ReactNode } from 'react'

type ProductList = {
  title?: string
  children: ReactNode
}

export async function ProductListLayout({ title, children }: ProductList) {
  return (
    <div className="bg-white min-h-full w-full">
      <Wrapper className="mx-auto flex flex-col max-w-2xl py-16 sm:py-24 lg:max-w-7xl">
        {title && (
          <h2 className="text-2xl font-bold capitalize tracking-tight text-neutral-900">
            {title}
          </h2>
        )}
        {children}
      </Wrapper>
    </div>
  )
}
