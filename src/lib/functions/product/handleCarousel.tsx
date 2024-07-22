import { ImageNode } from '@/lib/types/cart/Cart'
import { Edge } from '@/lib/types/common/Edge'
import { Dispatch, SetStateAction } from 'react'

type handleCarouselProps = {
  direction: 'next' | 'previous'
  productImages: Array<Edge<ImageNode>>
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
}

export function handleCarousel({
  direction,
  productImages,
  activeIndex,
  setActiveIndex,
}: handleCarouselProps) {
  const maxCarouselLength = productImages.length - 1

  switch (direction) {
    case 'next':
      setActiveIndex(activeIndex === maxCarouselLength ? 0 : activeIndex + 1)
      break
    case 'previous':
      setActiveIndex(activeIndex === 0 ? maxCarouselLength : activeIndex - 1)
      break
  }
}
