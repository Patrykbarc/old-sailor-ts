import Link from 'next/link'
import { Button } from '../../Button/Button'

export function ViewAllProductsButton() {
  return (
    <div className="w-full grid justify-center mt-12">
      <Link href="/store/products?category=all">
        <Button className="" size="xl" variant="cta">
          View all
        </Button>
      </Link>
    </div>
  )
}
