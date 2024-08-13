'use client'

const FileInputField = dynamic<any>(
  () => import('@/components/ui/FormFields/FileInputField/FileInputField'),
  { ssr: false }
)
import { InputField } from '@/components/ui/FormFields/InputField/InputField'
import { FormFieldProps } from '@/lib/types/contactForm/FormFieldProps'
import dynamic from 'next/dynamic'
import { CareerFormSchemaValues } from '../career-form-schema'

type CareerFormFieldsProps = Pick<
  FormFieldProps<CareerFormSchemaValues>,
  'control'
>

export function CareerFormFields({ control }: CareerFormFieldsProps) {
  return (
    <div className="space-y-6 w-full max-w-lg">
      <div className="grid md:grid-cols-2 space-y-6 md:space-y-0 md:gap-4">
        <InputField control={control} name="name" placeholder="Your name" />
        <InputField
          control={control}
          name="surname"
          placeholder="Your surname"
        />
      </div>
      <InputField
        control={control}
        name="email"
        type="email"
        placeholder="Your email"
      />
      <FileInputField
        control={control}
        name="file"
        placeholder="Your CV"
        label="PNG, JPG, JPEG, or PDF"
      />
    </div>
  )
}
