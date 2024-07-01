import { formatPrice } from '@/lib/functions/formatPrice'

type ProductPrice = {
  price: number
}

export function ProductPrice({ price }: ProductPrice) {
  return (
    <div className="mt-4 lg:row-span-3">
      <h2 className="sr-only">Product information</h2>
      <p className="text-3xl tracking-tight text-gray-900">
        {formatPrice(price)}
      </p>
    </div>
  )
}
