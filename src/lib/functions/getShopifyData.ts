import axios from 'axios'

export async function getShopifyData(query: string, variables?: object) {
  const SHOPIFY_API_ADMIN_URL = process.env.SHOPIFY_API_ADMIN_URL
  const SHOPIFY_ADMIN_ACCESS_TOKEN = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN

  if (SHOPIFY_API_ADMIN_URL && SHOPIFY_ADMIN_ACCESS_TOKEN) {
    try {
      const response = await axios.post(
        SHOPIFY_API_ADMIN_URL,
        { query, variables },
        {
          headers: {
            'Content-type': 'application/json',
            'X-shopify-Access-Token': SHOPIFY_ADMIN_ACCESS_TOKEN,
          },
        }
      )

      const fetchedProducts = response.data.data
      return fetchedProducts
    } catch (error) {
      throw new Error(`Failed to initialize Shopify API: ${error.message}`)
    }
  } else {
    throw new Error('Missing or incorrect access token or API URL')
  }
}
