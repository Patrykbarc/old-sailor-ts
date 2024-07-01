import { Images } from './singleTypes/ImagesType'
import { PriceRangeV2 } from './singleTypes/PriceRangeV2type'
import { Variants } from './singleTypes/VariantsType'

export type SingleProductTypes = {
  handle: string
  title: string
  description: string
  tags: Array<string>
  priceRangeV2: PriceRangeV2
  variants: Variants
  images: Images
}
