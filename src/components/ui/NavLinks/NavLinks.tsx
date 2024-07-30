'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Links = {
  name: string
  href: string
}

type NavLinkProps = {
  links: Links[]
  className?: string
  linkHighlight?: boolean
}

export function NavLinks({
  links,
  className,
  linkHighlight = true,
}: NavLinkProps) {
  const pathname = usePathname()

  return links.map((link) => {
    const linkStyle =
      linkHighlight && pathname === link.href ? 'text-primary' : ''
    return (
      <ul key={link.name}>
        <li
          className={`hover:text-primary transition-colors capitalize w-full ${className} ${linkStyle}`}
        >
          <Link href={link.href}>{link.name}</Link>
        </li>
      </ul>
    )
  })
}
