import { BLUR_DATA_URL } from '@/lib/constants/blur-data-url'
import Image from 'next/image'
import PLACEHOLDER from '/public/placeholder.jpg'

type BProductsListImageProps = {
  productImgSrc: string | null
  productImgAlt?: string | null
}

export function ProductsListImage({
  productImgSrc,
  productImgAlt,
}: BProductsListImageProps) {
  return (
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-neutral-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <Image
        src={productImgSrc ?? PLACEHOLDER}
        alt={productImgAlt ?? 'Product placeholder'}
        width={400}
        height={400}
        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
    </div>
  )
}
