import { Edge } from '../common/Edge'

export type Cart = {
  id: string
  checkoutUrl: string
  lines: CartLines
}

export type CartLines = {
  edges: Array<CartLineEdge>
}

export type CartLineEdge = {
  id: string
  quantity: number
  merchandise: Merchandise
  href: string
  merchandiseId: string
}

export type Merchandise = {
  id: string
  title: string
  priceV2: PriceV2
  product: Product
}

export type PriceV2 = {
  amount: string
  currencyCode: string
}

export type Product = {
  title: string
  images: Images
}

export type Images = {
  edges: Array<Edge<ImageNode>>
} | null

export type ImageEdge = {
  node: ImageNode
}

export type ImageNode = {
  id: string
  src: string
  altText: string | undefined
  url: string
}
