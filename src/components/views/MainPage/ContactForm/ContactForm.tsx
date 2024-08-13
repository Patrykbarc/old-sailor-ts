import { Form } from '@/components/ui/Form/Form'
import { useRecaptcha } from '@/lib/customHooks/useRecaptcha'
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldError, useForm } from 'react-hook-form'
import { FormFields } from '../../../ui/_MainPage/Contact/FormFields'
import { SubmitForm } from '../../../ui/_MainPage/Contact/SubmitForm/SubmitForm'
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

  const isSubmitSuccessful = form.formState.isSubmitSuccessful
  const isSubmitting = form.formState.isSubmitting
  const formControl = form.control
  const formError = form.formState.errors.root as FieldError | undefined

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
          <FormFields control={formControl} />
          <SubmitForm
            formError={formError}
            isSubmitting={isSubmitting}
            recaptchaSubmitStatus={recaptchaSubmitStatus}
          />
        </form>
      </Form>
    </fieldset>
  )
}
