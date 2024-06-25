import { productsPlaceholder } from '@/lib/constants/Store/productsPlaceholder'
import axios from 'axios'
import Image from 'next/image'

const query = `
query Products {
  products(first: 10) {
    edges {
      node {
        title
        handle
        tags
        priceRangeV2 {
          minVariantPrice {
            amount
          }
        }
        images(first: 1) {
          edges {
            node {
              transformedSrc
              altText
            }
          }
        }
      }
    }
  }
}
`

const API_URL = process.env.NEXT_PUBLIC_API_URL!
const ACCESS_TOKEN = process.env.ACCESS_TOKEN!

export async function ProductList() {
  await axios
    .post(
      API_URL,
      { query },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': ACCESS_TOKEN,
        },
      }
    )
    .then((response) => {
      const fetchedProducts = response.data.data.products.edges.map(
        (edge) => edge.node
      )
      console.log(fetchedProducts)
    })
    .catch((error) => {
      console.error(
        'Error fetching data:',
        error.response ? error.response.data : error.message
      )
    })

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-7xl">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productsPlaceholder.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt.en}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name.en}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.color.en}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price.eur}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
