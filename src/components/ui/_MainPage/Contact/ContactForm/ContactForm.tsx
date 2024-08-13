import { Form } from '@/components/ui/Form/Form'
import { useRecaptcha } from '@/lib/customHooks/useRecaptcha'
import { getHookFormFields } from '@/lib/functions/helpers/getHookFormFields'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { ContactFormFields } from '../ContactFormFields/ContactFormFields'
import { SubmitForm } from '../SubmitForm/SubmitForm'
import {
  CONTACT_FORM_SCHEMA,
  ContactFormSchemaValues,
} from './helpers/contact-form-schema'

export function ContactForm() {
  const form = useForm<ContactFormSchemaValues>({
    resolver: zodResolver(CONTACT_FORM_SCHEMA),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      message: '',
    },
    mode: 'onTouched',
  })

  const { recaptchaSubmitStatus, submitWithRecaptcha } = useRecaptcha({
    form,
  })

  const { isSubmitSuccessful, isSubmitting, formControl, formError } =
    getHookFormFields(form)

  return (
    <fieldset
      disabled={isSubmitSuccessful || isSubmitting}
      className="relative border-2 w-full h-fit p-8 rounded-lg bg-neutral-900 shadow-xl"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitWithRecaptcha)}
          className="disabled:cursor-not-allowed space-y-4"
        >
          <ContactFormFields control={formControl} />
          <SubmitForm
            formError={formError}
            isSubmitting={isSubmitting}
            recaptchaSubmitStatus={recaptchaSubmitStatus}
            message={[
              'Message has been sent.',
              "We'll answer you as soon as possible.",
            ]}
          />
        </form>
      </Form>
    </fieldset>
  )
}
