import { Form } from '@/components/ui/Form/Form'
import { RecaptchaSubmitStatus } from '@/lib/types/contactForm/RecaptchaSubmitStatus'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useForm } from 'react-hook-form'
import { FormFields } from '../../../ui/_MainPage/Contact/FormFields'
import { SubmitForm } from '../../../ui/_MainPage/Contact/SubmitForm/SubmitForm'
import { contactFormSchema, ContactFormSchemaValues } from './helpers/contactFormSchema'
import { submitMessage } from './helpers/submitMessage'

export function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [recaptchaSubmitStatus, setRecaptchaSubmitStatus] =
    useState<RecaptchaSubmitStatus>(null)

  const form = useForm<ContactFormSchemaValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      message: '',
    },
    mode: 'onTouched',
  })

  const onSubmit = async () => {
    await submitMessage({
      executeRecaptcha,
      setRecaptchaSubmitStatus,
      setError: form.setError,
      clearErrors: form.clearErrors,
    })
  }

  const isSubmitSuccessful = form.formState.isSubmitSuccessful
  const isSubmitting = form.formState.isSubmitting
  const formControl = form.control
  const formError = form.formState.errors.formError

  return (
    <fieldset
      disabled={isSubmitSuccessful || isSubmitting}
      className="relative border-2 w-full h-fit p-8 rounded-lg bg-neutral-900 text-neutral-900 shadow-xl"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
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
