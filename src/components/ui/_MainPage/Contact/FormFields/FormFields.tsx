import { ContactFormFieldProps } from '@/lib/types/contactForm/ContactFormFieldProps'
import { InputField } from './InputField/InputField'
import { TextAreaField } from './TextAreaField/TextAreaField'

type FormFieldsProps = Pick<ContactFormFieldProps, 'control'>

export function FormFields({ control }: FormFieldsProps) {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-4">
        <InputField control={control} name="name" placeholder="Your name" />
        <InputField
          control={control}
          name="surname"
          placeholder="Your surname"
        />
      </div>
      <InputField control={control} name="email" placeholder="Your email" />
      <TextAreaField
        control={control}
        name="message"
        placeholder="Your message"
      />
    </div>
  )
}
