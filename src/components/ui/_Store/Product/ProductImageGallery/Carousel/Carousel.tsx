import { BLUR_DATA_URL } from '@/lib/constants/blurDataUrl'
import { Edge } from '@/lib/types/singleTypes/EdgeType'
import { ImageNode } from '@/lib/types/singleTypes/ImageNodeType'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

type CarouselProps = {
  productImages: Array<Edge<ImageNode>>
  setActiveIndex: Dispatch<SetStateAction<number>>
}

export function Carousel({ productImages, setActiveIndex }: CarouselProps) {
  return (
    <div className="flex mt-5 gap-3">
      {productImages.map((image, index) => {
        return (
          <div
            key={image.node.url}
            className="hover:opacity-70"
            onClick={() => setActiveIndex(index)}
          >
            <Image
              className="border aspect-square w-full rounded-lg cursor-pointer"
              src={image.node.url}
              alt={image.node.altText ?? 'Image product'}
              width={400}
              height={400}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
        )
      })}
    </div>
  )
}
