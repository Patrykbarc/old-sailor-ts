import Link from 'next/link'

type CartProductTitle = {
  title: string
  href: string
}

export function CartProductTitle({ title, href }: CartProductTitle) {
  return (
    <h3 className="flex flex-col justify-between w-full text-base font-medium text-start text-neutral-900">
      <Link href={href}>{title}</Link>
    </h3>
  )
}
