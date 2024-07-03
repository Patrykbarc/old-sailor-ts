import { ImageMagnifier } from '@/components/ui/ImageMagnifier/ImageMagnifier'
import { Edge } from '@/lib/types/singleTypes/EdgeType'
import { ImageNode } from '@/lib/types/singleTypes/ImageNodeType'
import { Dispatch, SetStateAction } from 'react'
import { ArrowsWrapper } from '../ArrowsWrapper/ArrowsWrapper'

type MainGalleryImageProps = {
  productImages: Array<Edge<ImageNode>>
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
}

const arrowsStyles =
  'aspect-square size-12 absolute top-1/2 -translate-y-1/2 p-2 hover:scale-110 h-1/5 transition opacity-0 group-hover:opacity-100 hover:text-neutral-400 z-10'

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
