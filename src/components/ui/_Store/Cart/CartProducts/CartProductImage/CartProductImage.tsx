import { Images } from '@/lib/types/singleTypes/ImagesType'
import Image from 'next/image'
import PLACEHOLDER from '/public/placeholder.jpg'

type CartProductImageProps = {
  images: Images
}

export function CartProductImage({ images }: CartProductImageProps) {
  const url = images?.edges[0].node.url
  const alt = images?.edges[0].node.altText

  return (
    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <Image
        width={95}
        height={95}
        quality={30}
        src={url ?? PLACEHOLDER}
        alt={alt ?? 'Product placeholder'}
        className="h-full w-full object-cover object-center"
      />
    </div>
  )
}
