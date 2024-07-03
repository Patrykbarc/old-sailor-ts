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
  const variantSku = variants.edges[0].node.sku
  const [selectedVariant, setVariant] = useState(variantSku)

  return (
    <div className="mt-10">
      <h3 className="text-sm font-medium text-neutral-900">Size</h3>

      <fieldset aria-label="Choose a size" className="mt-4">
        <RadioGroup
          className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 justify-center"
          defaultValue="comfortable"
        >
          {variants.edges.map((v) => {
            const variant = v.node
            const availableForSale = variant.availableForSale
            const optionValue = variant.selectedOptions[0].value

            const selectedVariantStyle =
              selectedVariant === variant.sku ? 'ring-4 ring-primary' : ''

            return (
              availableForSale && (
                <div
                  key={variant.sku}
                  onClick={() => setVariant(variant.sku)}
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
                    {optionValue}
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
