'use client'

import { Edge } from '@/lib/types/singleTypes/EdgeType'
import { ImageNode } from '@/lib/types/singleTypes/ImageNodeType'
import { useState } from 'react'
import { ImagesGallery } from './ImagesGallery/ImagesGallery'
import { MainGalleryImage } from './MainGalleryImage/MainGalleryImage'

type ProductImageGalleryProps = {
  productImages: Array<Edge<ImageNode>>
}

export function ProductImageGallery({
  productImages,
}: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="mx-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8 select-none">
      <MainGalleryImage
        productImages={productImages}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      {productImages.length > 1 && (
        <ImagesGallery
          productImages={productImages}
          setActiveIndex={setActiveIndex}
        />
      )}
    </div>
  )
}
