import { SingleProductTypes } from './SingleProductTypes'

export type CartTypes = SingleProductTypes & {
  href: string
  quantity: number
}
