import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/Form/Form'
import { Input } from '@/components/ui/Input/Input'
import { FormFieldProps } from '@/lib/types/contactForm/FormFieldProps'
import React from 'react'
import { FieldValues, useController } from 'react-hook-form'

export function FileInputField<T extends FieldValues>({
  control,
  name,
  placeholder,
}: FormFieldProps<T>) {
  const {
    field: { onChange, onBlur, ref, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    onChange(file)
  }

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <FormControl>
            <Input
              placeholder={placeholder}
              type="file"
              onChange={handleFileChange}
              onBlur={onBlur}
              ref={ref}
            />
          </FormControl>
          {error && <FormMessage>{error.message}</FormMessage>}
        </FormItem>
      )}
    />
  )
}
