import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/Form/Form'
import { Textarea } from '@/components/ui/Textarea/Textarea'
import { FC } from 'react'
import { ContactFormFieldProps } from '../ContactForm'
import { WordCounter } from '../WordCounter/WordCounter'

export const TextareaField: FC<ContactFormFieldProps> = ({
  control,
  name,
  placeholder,
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormControl>
          <Textarea className="max-h-56" placeholder={placeholder} {...field} />
        </FormControl>
        <div className="grid grid-cols-3 w-full">
          <FormMessage className="col-span-2" />
          <WordCounter
            count={field.value.length}
            className="text-neutral-300 w-full block text-end col-start-3"
          />
        </div>
      </FormItem>
    )}
  />
)
