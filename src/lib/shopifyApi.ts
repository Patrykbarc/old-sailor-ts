import { createStorefrontApiClient } from '@shopify/storefront-api-client'

const SHOPIFY_PUBLIC_API_URL = process.env.NEXT_PUBLIC_SHOPIFY_PUBLIC_API_URL
const SHOPIFY_STOREFRONT_ACCESS_TOKEN =
  process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN

const client = getClient()

function getClient() {
  if (!SHOPIFY_STOREFRONT_ACCESS_TOKEN || !SHOPIFY_PUBLIC_API_URL) {
    throw new Error('Missing required environment variables')
  }

  try {
    const client = createStorefrontApiClient({
      storeDomain: SHOPIFY_PUBLIC_API_URL,
      apiVersion: '2024-04',
      publicAccessToken: SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    })

    return client
  } catch (error) {
    console.error('Error initializing Shopify API:', error)
    throw new Error('Failed to initialize Shopify API')
  }
}

export default client
