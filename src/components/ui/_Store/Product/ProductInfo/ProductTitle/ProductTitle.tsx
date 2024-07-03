'use client'

type ProductTitleProps = {
  title: string
}

export function ProductTitle({ title }: ProductTitleProps) {
  return (
    <div className="lg:col-span-2 lg:border-gray-200 lg:pr-8">
      <h1 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
        {title}
      </h1>
    </div>
  )
}
