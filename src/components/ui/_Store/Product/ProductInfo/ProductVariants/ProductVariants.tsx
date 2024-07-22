'use client'

import { Label } from '@/components/ui/Label/Label'
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/RadioGroup/RadioGroup'
import { Variants } from '@/lib/types/common/Variants'
import { Dispatch, SetStateAction } from 'react'
import { FieldsetWrapper } from '../FieldsetWrapper/FieldsetWrapper'

type SelectedVariant = { id: string; title: string }

type ProductVariantsProps = {
  variants: Variants
  selectedVariant: SelectedVariant
  setVariant: Dispatch<SetStateAction<SelectedVariant>>
}

export function ProductVariants({
  variants,
  selectedVariant,
  setVariant,
}: ProductVariantsProps) {
  function handleSetVariant(variant: { id: string; title: string }) {
    setVariant({ id: variant.id, title: variant.title })
  }

  return (
    <div className="lg:col-span-2 lg:col-start-1 lg:border-gray-200 lg:pr-8 lg:pt-6">
      <FieldsetWrapper title="Variant" ariaLabel="Choose a variant">
        <RadioGroup
          className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 justify-center"
          defaultValue="comfortable"
        >
          {variants.edges.map((v) => {
            const variant = v.node
            const availableForSale = variant.availableForSale
            const optionValue = variant.selectedOptions[0].value

            const selectedVariantStyle =
              selectedVariant.id === variant.id ? 'ring-4 ring-primary' : ''

            return (
              availableForSale && (
                <div
                  key={variant.id}
                  onClick={() => handleSetVariant(variant)}
                  className={`hover:cursor-pointer py-4 lg:py-0 lg:aspect-square border flex items-center rounded-lg transition-shadow ${selectedVariantStyle}`}
                >
                  <RadioGroupItem
                    className="hidden"
                    value={variant.title}
                    id={String(variant.id)}
                  />
                  <Label
                    className="hover:cursor-pointer text-center w-full text-neutral-600"
                    htmlFor={String(variant.id)}
                  >
                    {optionValue}
                  </Label>
                </div>
              )
            )
          })}
        </RadioGroup>
      </FieldsetWrapper>
    </div>
  )
}
