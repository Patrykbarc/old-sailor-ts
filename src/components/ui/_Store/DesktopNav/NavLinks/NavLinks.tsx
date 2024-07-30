import { STORE_NAV_LINKS } from '@/lib/constants/links/store-nav-links'
import Link from 'next/link'

type NavLinksProps = {
  className?: string
}

export function NavLinks({ className }: NavLinksProps) {
  return (
    <div className={`flex gap-8 capitalize ${className}`}>
      {STORE_NAV_LINKS.map(({ name, href }) => (
        <Link className="text-nowrap" key={href} href={href}>
          {name}
        </Link>
      ))}
    </div>
  )
}
