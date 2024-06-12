import { navLinks } from '@/lib/constants/navLinks'
import Link from 'next/link'

type NavLinkProps = {
  className?: string
}

export function NavLinks({ className }: NavLinkProps) {
  return navLinks.map((link) => {
    return (
      <ul key={link.name}>
        <li
          className={`hover:text-primary transition-colors capitalize w-full ${className}`}
        >
          <Link href={link.href}>{link.name}</Link>
        </li>
      </ul>
    )
  })
}
