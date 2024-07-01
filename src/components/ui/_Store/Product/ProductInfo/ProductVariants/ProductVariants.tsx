'use client'

import { Label } from '@/components/ui/Label/Label'
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/RadioGroup/RadioGroup'
import { Variants } from '@/lib/types/singleTypes/VariantsType'
import { useState } from 'react'

type ProductVariantsProps = {
  variants: Variants
}

export function ProductVariants({ variants }: ProductVariantsProps) {
  // console.log(variants.edges)
  const [selectedVariant, setVariant] = useState(0)

  return (
    <div className="mt-10">
      <h3 className="text-sm font-medium text-gray-900">Variant</h3>

      <fieldset aria-label="Choose a size" className="mt-4">
        <RadioGroup
          className="grid grid-cols-4 lg:grid-cols-5 justify-center"
          defaultValue="comfortable"
        >
          {variants.edges.map((v, index) => {
            const variant = v.node
            const availableForSale = variant.availableForSale

            const selectedVariantStyle =
              selectedVariant === index ? 'ring-4 ring-primary' : ''
            // console.log(variant)
            return (
              availableForSale && (
                <div
                  key={variant.sku}
                  onClick={() => setVariant(index)}
                  className={`hover:cursor-pointer py-4 lg:py-0 lg:aspect-square border flex items-center rounded-lg transition-shadow ${selectedVariantStyle}`}
                >
                  <RadioGroupItem
                    className="hidden"
                    value={variant.title}
                    id={String(variant.sku)}
                  />
                  <Label
                    className="hover:cursor-pointer text-center w-full text-neutral-600"
                    htmlFor={String(variant.sku)}
                  >
                    {variant.title}
                  </Label>
                </div>
              )
            )
          })}
        </RadioGroup>
      </fieldset>
    </div>
  )
}
