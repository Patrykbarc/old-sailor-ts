import { BLUR_DATA_URL } from '@/lib/constants/blurDataUrl'
import { Edge } from '@/lib/types/singleTypes/EdgeType'
import { ImageNode } from '@/lib/types/singleTypes/ImageNodeType'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

type ImagesGalleryProps = {
  productImages: Array<Edge<ImageNode>>
  setActiveIndex: Dispatch<SetStateAction<number>>
}

export function ImagesGallery({
  productImages,
  setActiveIndex,
}: ImagesGalleryProps) {
  return (
    <div className="sm:flex hidden mt-5 gap-3 justify-center">
      {productImages.map((image, index) => {
        return (
          <div
            key={image.node.url}
            className="hover:opacity-70"
            onClick={() => setActiveIndex(index)}
          >
            <Image
              className="border size-32 aspect-square w-full rounded-lg cursor-pointer"
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
