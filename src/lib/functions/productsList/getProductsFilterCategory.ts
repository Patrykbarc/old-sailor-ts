const allProductsId = 'gid://shopify/Collection/271803744327'
const cosmeticsId = 'gid://shopify/Collection/271803121735'
const alcoholsId = 'gid://shopify/Collection/271803088967'

export function getProductsFilterCategory(category?: string) {
  switch (category) {
    case 'cosmetics':
      return cosmeticsId
    case 'alcohols':
      return alcoholsId
    default:
      return allProductsId
  }
}
