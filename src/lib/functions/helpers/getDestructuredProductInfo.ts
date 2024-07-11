import { CartTypes } from '@/lib/types/CartTypes'

export function getDestructuredProductInfo(productInfo: CartTypes) {
  const title = productInfo.title
  const price = productInfo.variants.edges[0].node.price
  const description = productInfo.description
  const { variants } = productInfo
  const variantId = variants.edges[0].node.id
  const variantName = variants.edges[0].node.title
  const hasMulitpleVariants = variants.edges.length > 1
  return {
    title,
    price,
    description,
    variants,
    variantId,
    variantName,
    hasMulitpleVariants,
  }
}
