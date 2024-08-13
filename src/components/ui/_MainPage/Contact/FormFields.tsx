import { ContactFormSchemaValues } from '@/components/views/MainPage/ContactForm/helpers/contact-form-schema'
import { FormFieldProps } from '@/lib/types/contactForm/FormFieldProps'
import { InputField } from '../../FormFields/InputField/InputField'
import { TextAreaField } from '../../FormFields/TextAreaField/TextAreaField'

type FormFieldsProps = Pick<FormFieldProps<ContactFormSchemaValues>, 'control'>

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
      <InputField
        control={control}
        name="email"
        type="email"
        placeholder="Your email"
      />
      <TextAreaField
        control={control}
        name="message"
        placeholder="Your message"
      />
    </div>
  )
}
