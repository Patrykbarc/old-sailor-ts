import axios from 'axios'

export async function getShopifyData(query: string, variables?: object) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL!
  const ACCESS_TOKEN = process.env.ACCESS_TOKEN!

  try {
    const response = await axios.post(
      API_URL,
      { query, variables },
      {
        headers: {
          'Content-type': 'application/json',
          'X-shopify-Access-Token': ACCESS_TOKEN,
        },
      }
    )

    const fetchedProducts = response.data.data
    return fetchedProducts
  } catch (error) {
    console.error(
      'Error fetching data:',
      error.response ? error.response.data : error.message
    )
  }
}
