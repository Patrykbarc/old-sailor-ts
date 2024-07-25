import { CartTypes } from '@/lib/types/CartTypes'

export function getDestructuredProductInfo(productInfo: CartTypes) {
  if (productInfo) {
    const title = productInfo.title
    const price = productInfo.variants.edges[0].node.price
    const description = productInfo.description
    const { variants } = productInfo
    const merchandiseId = variants.edges[0].node.id
    const variantName = variants.edges[0].node.title
    const hasMulitpleVariants = variants.edges.length > 1
    const availableForSale = variants.edges[0].node.availableForSale
    const quantityAvailable = variants.edges[0].node.quantityAvailable
    return {
      title,
      price,
      description,
      variants,
      merchandiseId,
      variantName,
      hasMulitpleVariants,
      availableForSale,
      quantityAvailable,
    }
  } else {
    throw new Error('productInfo is missing or invalid')
  }
}
