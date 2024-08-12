import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/Form/Form'
import { Input } from '@/components/ui/Input/Input'
import { FormFieldProps } from '@/lib/types/contactForm/FormFieldProps'
import { FieldValues } from 'react-hook-form'

export function InputField<T extends FieldValues>({
  control,
  name,
  placeholder,
  type = 'text',
}: FormFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input placeholder={placeholder} type={type} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
