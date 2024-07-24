import { ImageNode } from '@/lib/types/cart/Cart'
import Image from 'next/image'
import PLACEHOLDER from '/public/placeholder.jpg'

type CartProductImageProps = {
  images?: ImageNode
}

export function CartProductImage({ images }: CartProductImageProps) {
  const url = images?.src
  const alt = images?.altText

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
