import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/Form/Form'
import { Input } from '@/components/ui/Input/Input'
import { ContactFormFieldProps } from '../ContactForm'

export function InputField({
  control,
  name,
  placeholder,
}: ContactFormFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
