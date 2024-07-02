import { handleCarousel } from '@/lib/functions/product/handleCarousel'
import { Edge } from '@/lib/types/singleTypes/EdgeType'
import { ImageNode } from '@/lib/types/singleTypes/ImageNodeType'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { Dispatch, ReactNode, SetStateAction } from 'react'

type ArrowsWrapper = {
  children: ReactNode
  productImages: Array<Edge<ImageNode>>
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
}

const arrowsStyles =
  'aspect-square size-12 absolute top-1/2 -translate-y-1/2 p-2 hover:scale-110 h-1/5 transition opacity-0 group-hover:opacity-100 hover:text-gray-400 z-10'

export function ArrowsWrapper({
  children,
  productImages,
  activeIndex,
  setActiveIndex,
}: ArrowsWrapper) {
  const handleCarouselProps = {
    productImages: productImages,
    activeIndex: activeIndex,
    setActiveIndex: setActiveIndex,
  }
  return (
    <div className="size-full cursor-pointer">
      <ArrowLeftIcon
        className={`${arrowsStyles} left-3`}
        onClick={() =>
          handleCarousel({
            direction: 'previous',
            ...handleCarouselProps,
          })
        }
      />
      {children}
      <ArrowRightIcon
        className={`${arrowsStyles} right-3`}
        onClick={() =>
          handleCarousel({
            direction: 'next',
            ...handleCarouselProps,
          })
        }
      />
    </div>
  )
}
