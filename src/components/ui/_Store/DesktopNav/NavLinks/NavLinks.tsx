import { storeNavLinks } from '@/lib/constants/Store/storeNavLinks'
import Link from 'next/link'

type NavLinksProps = {
  className?: string
}

export function NavLinks({ className }: NavLinksProps) {
  return (
    <div className={`flex gap-8 ${className}`}>
      {storeNavLinks.map(({ name, href }) => (
        <Link key={href} href={href}>
          {name}
        </Link>
      ))}
    </div>
  )
}
