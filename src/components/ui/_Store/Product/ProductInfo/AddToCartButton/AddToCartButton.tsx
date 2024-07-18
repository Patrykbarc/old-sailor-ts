import { Button } from '@/components/ui/Button/Button'
import { useCart } from '@/lib/customHooks/useCart'
import { CartTypes } from '@/lib/types/CartTypes'

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

  async function handleAddProductToCart(product: CartTypes) {
    await addToCart(product.merchandiseId, quantity)
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
