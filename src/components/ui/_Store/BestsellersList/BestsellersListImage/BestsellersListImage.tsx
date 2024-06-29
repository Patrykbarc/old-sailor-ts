import { BLUR_DATA_URL } from '@/lib/constants/blurDataUrl'
import Image from 'next/image'
import PLACEHOLDER from '/public/placeholder.jpg'

type BestsellersListImageProps = {
  productImgSrc: string | null
  productImgAlt?: string | null
}

export function BestsellersListImage({
  productImgSrc,
  productImgAlt,
}: BestsellersListImageProps) {
  return (
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
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
