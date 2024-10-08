import { FormControl, FormField, FormItem } from '@/components/ui/Form/Form'
import { Input } from '@/components/ui/Input/Input'
import { FormFieldProps } from '@/lib/types/contactForm/FormFieldProps'
import React, { useEffect, useState } from 'react'
import { FieldValues, useController } from 'react-hook-form'
import { FieldNotifications } from './FieldNotifications/FieldNotifications'

type FileInputFieldProps<T extends FieldValues> = FormFieldProps<T> & {
  label?: string
}

export default function FileInputField<T extends FieldValues>({
  control,
  name,
  placeholder,
  label,
}: FileInputFieldProps<T>) {
  const {
    field: { onChange, onBlur, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(typeof window !== 'undefined')
  }, [])

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (isClient) {
      const file = e.target.files?.[0] || null
      onChange(file)
    }
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
          <FieldNotifications error={error} label={label} />
        </FormItem>
      )}
    />
  )
}
