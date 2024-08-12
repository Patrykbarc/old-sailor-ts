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
    field: { ref, onChange, onBlur, value, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    onChange(file)
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input placeholder={placeholder} type="file" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
