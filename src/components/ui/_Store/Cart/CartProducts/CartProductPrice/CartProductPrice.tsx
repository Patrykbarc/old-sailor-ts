import { Currency, formatPrice } from '@/lib/functions/formatPrice'

type CartProductPriceProps = {
  price: number
  currencyCode: Currency
}

export function CartProductPrice({
  price,
  currencyCode,
}: CartProductPriceProps) {
  return (
    <p className="ps-2 text-end text-sm text-neutral-900">
      {formatPrice(+price, currencyCode)}
    </p>
  )
}
