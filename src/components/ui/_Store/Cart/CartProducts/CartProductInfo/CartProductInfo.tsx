import { Currency, formatPrice } from '@/lib/functions/formatPrice'
import Link from 'next/link'

type CartProductInfo = {
  title: string
  href: string
  price: number
  currency: Currency
}

export function CartProductInfo({
  title,
  href,
  price,
  currency,
}: CartProductInfo) {
  return (
    <div>
      <div className="flex justify-between text-base font-medium text-neutral-900">
        <h3>
          <Link href={href}>{title}</Link>
        </h3>
        <p className="ml-4">{formatPrice(price, currency)}</p>
      </div>
    </div>
  )
}
