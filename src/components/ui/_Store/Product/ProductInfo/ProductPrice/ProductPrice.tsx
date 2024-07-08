import { Currency, formatPrice } from '@/lib/functions/formatPrice'

type ProductPrice = {
  price: {
    amount: string
    currencyCode: string
  }
}

export function ProductPrice({ price }: ProductPrice) {
  const amount = Number(price.amount)
  const currencyCode = price.currencyCode as Currency

  return (
    <div className="mt-4 lg:row-span-3">
      <h2 className="sr-only">Product information</h2>
      <p className="text-3xl tracking-tight text-neutral-900">
        {formatPrice(amount, currencyCode)}
      </p>
    </div>
  )
}
