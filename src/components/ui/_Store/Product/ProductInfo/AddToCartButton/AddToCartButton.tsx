import { Button } from '@/components/ui/Button/Button'
import { useCart } from '@/lib/customHooks/useCart'
import { CartTypes } from '@/lib/types/CartTypes'

type AddToCartButtonProps = {
  quantity: number
  productInfo: CartTypes
}

export function AddToCartButton({
  quantity,
  productInfo,
}: AddToCartButtonProps) {
  const { setCartContent } = useCart()

  function handleAddProductToCart(product: CartTypes) {
    setCartContent((items) => {
      const duplicate = items.find((item) => item.id === product.id)

      if (duplicate) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        return [...items, { ...product, quantity }]
      }
    })
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
