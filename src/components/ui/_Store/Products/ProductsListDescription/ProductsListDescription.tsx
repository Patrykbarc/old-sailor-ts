import { formatPrice } from '@/lib/functions/formatPrice'
import Link from 'next/link'

type ProductsListDescriptionProps = {
  productHandle: string
  productTitle: string
  productPrice: string
}

export function ProductsListDescription({
  productHandle,
  productTitle,
  productPrice,
}: ProductsListDescriptionProps) {
  return (
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          <Link href={`/store/products/${productHandle}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {productTitle}
          </Link>
        </h3>
      </div>
      <p className="text-sm font-medium text-gray-900">
        {formatPrice(Number(productPrice))}
      </p>
    </div>
  )
}
