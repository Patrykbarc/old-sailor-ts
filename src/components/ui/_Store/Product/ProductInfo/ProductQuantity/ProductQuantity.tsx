'use client'

import { Input } from '@/components/ui/Input/Input'
import { useCart } from '@/lib/customHooks/useCart'
import { FieldsetWrapper } from '../FieldsetWrapper/FieldsetWrapper'
import { QuantityHandlerButton } from './Buttons/QuantityHandlerButton'

type ProductQuantityProps = {
  merchandiseId?: string
  quantity: number
  setQuantity: (quantity: number) => void
}

export function ProductQuantity({
  merchandiseId,
  quantity,
  setQuantity,
}: ProductQuantityProps) {
  const { updateQuantity } = useCart()

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity)
    if (merchandiseId) {
      updateQuantity(merchandiseId, newQuantity)
    }
  }

  return (
    <div>
      <FieldsetWrapper
        title="Quantity"
        ariaLabel="Choose a quantity"
        className="w-fit"
      >
        <div className="flex border rounded-md">
          <QuantityHandlerButton
            actionType="subtract"
            setQuantity={() => handleQuantityChange(Math.max(1, quantity - 1))}
            title="Product"
          />
          <Input
            className="size-12 aspect-square border-none no-spinner text-center z-10"
            onChange={(e) =>
              handleQuantityChange(Math.max(1, Number(e.target.value)))
            }
            value={quantity}
            step={1}
            min={1}
            type="number"
          />
          <QuantityHandlerButton
            actionType="add"
            setQuantity={() => handleQuantityChange(quantity + 1)}
            title="Product"
          />
        </div>
      </FieldsetWrapper>
    </div>
  )
}
