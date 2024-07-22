import { Images } from './cart/Cart'
import { Variants } from './common/Variants'

export type SingleProductTypes = {
  id: string
  handle: string
  title: string
  description: string
  tags: Array<string>
  variants: Variants
  images: Images
}
