import { Button } from '@/components/ui/Button/Button'
import { CartContext } from '@/lib/contexts/CartContext'
import { CartTypes } from '@/lib/types/CartTypes'
import { useContext } from 'react'

type AddToCartButtonProps = {
  quantity: number
  productInfo: CartTypes
}

export function AddToCartButton({
  quantity,
  productInfo,
}: AddToCartButtonProps) {
  const { setCartContent } = useContext(CartContext)

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
