import { storeNavLinks } from '@/lib/constants/Store/storeNavLinks'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { SelectCurrency } from '../SelectCurrency/SelectCurrency'
import LOGO from '/public/old-sailor-logo-horizontal.png'

export function StoreNav() {
  return (
    <nav className="bg-neutral-800">
      <div className="font-semibold px-8 justify-between pt-8">
        <div className="border-b grid grid-cols-3 pb-6 items-center border-neutral-600">
          <div className="flex gap-8">
            {storeNavLinks.map(({ name, href }) => (
              <Link key={href} href={href}>
                {name}
              </Link>
            ))}
          </div>

          <div className="mx-auto">
            <Link href={'/store'}>
              <Image alt="Old Sailor Barber logo" src={LOGO} />
            </Link>
          </div>

          <div className="flex justify-end gap-8 items-center">
            <SelectCurrency />
            <ShoppingBagIcon className="size-8" />
          </div>
        </div>
      </div>
    </nav>
  )
}
