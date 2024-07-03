import Image from 'next/image'
import Link from 'next/link'
import LOGO from '/public/old-sailor-logo-horizontal.png'

export function NavLogo() {
  return (
    <div className="mx-auto">
      <Link href={'/store'}>
        <Image alt="Old Sailor Barber logo" src={LOGO} />
      </Link>
    </div>
  )
}
