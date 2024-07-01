'use client'

import { BLUR_DATA_URL } from '@/lib/constants/blurDataUrl'
import { Edge } from '@/lib/types/singleTypes/EdgeType'
import { ImageNode } from '@/lib/types/singleTypes/ImageNodeType'
import Image from 'next/image'
import { useState } from 'react'
import { Carousel } from './Carousel/Carousel'

type ProductImageGalleryProps = {
  productImages: Array<Edge<ImageNode>>
}

export function ProductImageGallery({
  productImages,
}: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const imageNode = productImages[activeIndex].node

  return (
    <div className="mx-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8">
      <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg">
        <Image
          width={600}
          height={600}
          src={imageNode.url}
          alt={imageNode.altText ?? 'Product'}
          className="h-full w-full object-cover object-center"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
      </div>
      {productImages.length > 1 && (
        <Carousel
          productImages={productImages}
          setActiveIndex={setActiveIndex}
        />
      )}
    </div>
  )
}
