'use client'

import { navLinks } from '@/lib/constants/MainPage/navLinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  className?: string
  linkHighlight?: boolean
}

export function NavLinks({ className, linkHighlight = true }: NavLinkProps) {
  const pathname = usePathname()

  return navLinks.map((link) => {
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
