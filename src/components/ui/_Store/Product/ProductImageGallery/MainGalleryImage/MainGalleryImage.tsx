import { ImageMagnifier } from '@/components/ui/ImageMagnifier/ImageMagnifier'
import { ImageNode } from '@/lib/types/cart/Cart'
import { Edge } from '@/lib/types/common/Edge'
import { Dispatch, SetStateAction } from 'react'
import { ArrowsWrapper } from '../ArrowsWrapper/ArrowsWrapper'

type MainGalleryImageProps = {
  productImages: Array<Edge<ImageNode>>
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
}

export function MainGalleryImage({ ...props }: MainGalleryImageProps) {
  const imageNode = props.productImages[props.activeIndex].node

  return (
    <div className="aspect-h-4 relative aspect-w-3 overflow-hidden rounded-lg group">
      <div className="size-full cursor-pointer">
        <ArrowsWrapper {...props}>
          <ImageMagnifier
            src={imageNode.url}
            magnifierHeight={300}
            magnifieWidth={300}
          />
        </ArrowsWrapper>
      </div>
    </div>
  )
}
