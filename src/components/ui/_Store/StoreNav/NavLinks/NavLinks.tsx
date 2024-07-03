import { storeNavLinks } from '@/lib/constants/Store/storeNavLinks'
import Link from 'next/link'

export function NavLinks() {
  return (
    <div className="flex gap-8">
      {storeNavLinks.map(({ name, href }) => (
        <Link key={href} href={href}>
          {name}
        </Link>
      ))}
    </div>
  )
}
