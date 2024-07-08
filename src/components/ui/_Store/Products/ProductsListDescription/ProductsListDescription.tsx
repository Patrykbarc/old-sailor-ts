import { Currency, formatPrice } from '@/lib/functions/formatPrice'
import Link from 'next/link'

type ProductsListDescriptionProps = {
  productHandle: string
  productTitle: string
  productPrice: { amount: string; currencyCode: string }
}
export function ProductsListDescription({
  productHandle,
  productTitle,
  productPrice,
}: ProductsListDescriptionProps) {  
  const currencyCode = productPrice.currencyCode as Currency

  return (
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-neutral-700">
          <Link href={`/store/products/${productHandle}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {productTitle}
          </Link>
        </h3>
      </div>
      <p className="text-sm font-medium text-neutral-900">
        {formatPrice(Number(productPrice.amount), currencyCode)}
      </p>
    </div>
  )
}
