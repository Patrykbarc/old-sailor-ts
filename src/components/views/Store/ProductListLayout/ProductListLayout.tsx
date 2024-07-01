import { ReactNode } from 'react'

type ProductList = {
  title?: string
  children: ReactNode
}

export async function ProductListLayout({ title, children }: ProductList) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-7xl">
        {title && (
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  )
}
