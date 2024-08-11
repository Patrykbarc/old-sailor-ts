import { Button } from '@/components/ui/Button/Button'
import { Form } from '@/components/ui/Form/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { Control, useForm } from 'react-hook-form'
import PulseLoader from 'react-spinners/PulseLoader'
import { formSchema, FormSchemaValues } from './helpers/formSchema'
import { submitMessage } from './helpers/submitMessage'
import { InputField } from './InputField/InputField'
import { MessageSentNotification } from './MessageSentNotification/MessageSentNotification'
import { TextAreaField } from './TextAreaField/TextAreaField'

export type ContactFormFieldProps = {
  control: Control<FormSchemaValues>
  name: keyof FormSchemaValues
  placeholder: string
}

export type RecaptchaSubmitStatus = 'success' | 'failed' | null

export function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [recaptchaSubmitStatus, setRecaptchaSubmitStatus] =
    useState<RecaptchaSubmitStatus>(null)

  const form = useForm<FormSchemaValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      message: '',
    },
    mode: 'onTouched',
  })

  const isSubmitSuccessful = form.formState.isSubmitSuccessful

  const onSubmit = async () => {
    await submitMessage({
      executeRecaptcha,
      setRecaptchaSubmitStatus,
      setError: form.setError,
      clearErrors: form.clearErrors,
    })
  }
  console.log(form.formState.isSubmitting)

  const isSubmitting = form.formState.isSubmitting

  return (
    <fieldset
      disabled={isSubmitSuccessful}
      className="relative border-2 w-full h-fit p-8 rounded-lg bg-neutral-900 text-neutral-900 shadow-xl"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="disabled:cursor-not-allowed space-y-4"
        >
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-4">
              <InputField
                control={form.control}
                name="name"
                placeholder="Your name"
              />
              <InputField
                control={form.control}
                name="surname"
                placeholder="Your surname"
              />
            </div>
            <InputField
              control={form.control}
              name="email"
              placeholder="Your email"
            />
            <TextAreaField
              control={form.control}
              name="message"
              placeholder="Your message"
            />
          </div>

          <div className="space-y-4">
            {form.formState.errors.formError && (
              <div className="text-red-600">
                {form.formState.errors.formError.message}
              </div>
            )}

            {recaptchaSubmitStatus !== 'success' ? (
              isSubmitting ? (
                <PulseLoader
                  color={'#e7b223'}
                  size={8}
                  aria-label="Form submit loader"
                />
              ) : (
                <Button type="submit">Submit</Button>
              )
            ) : (
              <MessageSentNotification />
            )}
          </div>
        </form>
      </Form>
    </fieldset>
  )
}
