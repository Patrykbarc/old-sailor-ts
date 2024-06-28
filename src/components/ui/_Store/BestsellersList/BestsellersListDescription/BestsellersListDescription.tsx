import { formatPrice } from '@/lib/functions/formatPrice'
import Link from 'next/link'

type BestsellersListDescriptionProps = {
  productHandle: string
  productTitle: string
  productTags: string | string[]
  productPrice: string
}

export function BestsellersListDescription({
  productHandle,
  productTitle,
  productTags,
  productPrice,
}: BestsellersListDescriptionProps) {
  return (
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          <Link href={`store/products/${productHandle}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {productTitle}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{productTags}</p>
      </div>
      <p className="text-sm font-medium text-gray-900">
        {formatPrice(Number(productPrice))}
      </p>
    </div>
  )
}
