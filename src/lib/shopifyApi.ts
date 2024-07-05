import { createStorefrontApiClient } from '@shopify/storefront-api-client'

const SHOPIFY_PUBLIC_API_URL = process.env.SHOPIFY_PUBLIC_API_URL
const SHOPIFY_STOREFRONT_ACCESS_TOKEN =
  process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN

if (!SHOPIFY_STOREFRONT_ACCESS_TOKEN || !SHOPIFY_PUBLIC_API_URL) {
  throw new Error('Missing required environment variables')
}

let client

try {
  client = createStorefrontApiClient({
    storeDomain: SHOPIFY_PUBLIC_API_URL,
    apiVersion: '2024-04',
    publicAccessToken: SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  })
} catch (error) {
  console.error('Error initializing Shopify API:', error)
  throw new Error('Failed to initialize Shopify API')
}

export default client
