import { Images } from './singleTypes/ImagesType'
import { PriceRangeV2 } from './singleTypes/PriceRangeV2type'

export type SingleProductTypes = {
  title: string
  description: string
  tags: Array<string>
  priceRangeV2: PriceRangeV2
  images: Images
}
