'use client'

import { Input } from '@/components/ui/Input/Input'
import { CartContext } from '@/lib/contexts/CartContext'
import { useContext } from 'react'
import { FieldsetWrapper } from '../FieldsetWrapper/FieldsetWrapper'
import { QuantityHandlerButton } from './Buttons/QuantityHandlerButton'

type ProductQuantityProps = {
  title: string
  className?: string
}

export function ProductQuantity({ title, className }: ProductQuantityProps) {
  const { quantity, setQuantity } = useContext(CartContext)
  return (
    <div className={className}>
      <FieldsetWrapper
        title="Quantity"
        ariaLabel="Choose a quantity"
        className="w-fit"
      >
        <div className="flex border rounded-md">
          <QuantityHandlerButton
            actionType="subtract"
            setQuantity={setQuantity}
            title={title}
          />
          <Input
            className="size-12 aspect-square border-none no-spinner text-center z-10"
            onChange={(e) =>
              setQuantity({ type: 'input', payload: Number(e.target.value) })
            }
            value={quantity}
            step={1}
            min={1}
            type="number"
          />
          <QuantityHandlerButton
            actionType="add"
            setQuantity={setQuantity}
            title={title}
          />
        </div>
      </FieldsetWrapper>
    </div>
  )
}
