import Image from 'next/image'
import LOGO from '/public/old-sailor-logo-horizontal.png'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { SelectCurrency } from '../SelectCurrency/SelectCurrency'

export function StoreNav() {
  return (
    <nav>
      <div className="font-semibold px-8 justify-between pt-8">
        <div className="border-b grid grid-cols-3 pb-6 items-center border-neutral-600">
          <div className="flex gap-8">
            <Link href={'/'}>Category 1</Link>
            <Link href={'/'}>Category 2</Link>
            <Link href={'/'}>Category 3</Link>
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
