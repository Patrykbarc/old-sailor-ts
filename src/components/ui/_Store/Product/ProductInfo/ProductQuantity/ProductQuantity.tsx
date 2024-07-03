'use client'

import { Input } from '@/components/ui/Input/Input'
import { Action } from '@/lib/customHooks/setProductsQuantityReducer/setProductsQuantityReducer'
import { Dispatch } from 'react'
import { QuantityHandlerButton } from './Buttons/QuantityHandlerButton'

type ProductQuantityProps = {
  title: string
  quantity: number
  setQuantity: Dispatch<Action>
}

export function ProductQuantity({
  title,
  quantity,
  setQuantity,
}: ProductQuantityProps) {
  return (
    <div className="flex flex-col w-fit text-neutral-900 mb-3">
      <h3 className="text-sm font-medium text-neutral-900 mb-3">Quantity</h3>
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
    </div>
  )
}
