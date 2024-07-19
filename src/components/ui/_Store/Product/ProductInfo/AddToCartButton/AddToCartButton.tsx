import { Button } from '@/components/ui/Button/Button'
import { useCart } from '@/lib/customHooks/useCart'
import { CartTypes } from '@/lib/types/CartTypes'
import { usePathname } from 'next/navigation'

type AddToCartButtonProps = {
  quantity: number
  variant: string
  productInfo: CartTypes
}

export function AddToCartButton({
  quantity,
  variant,
  productInfo,
}: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const pathname = usePathname()

  async function handleAddProductToCart(product: CartTypes) {
    addToCart(product.merchandiseId, quantity, pathname)
  }

  return (
    <Button
      size="xl"
      variant="outline"
      className="text-neutral-800"
      onClick={() => handleAddProductToCart(productInfo)}
    >
      Add to cart
    </Button>
  )
}
