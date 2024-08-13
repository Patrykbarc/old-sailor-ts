'use client'

import { Form } from '@/components/ui/Form/Form'
import { useRecaptcha } from '@/lib/customHooks/useRecaptcha'
import { getHookFormFields } from '@/lib/functions/helpers/getHookFormFields'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { SubmitForm } from '../../Contact/SubmitForm/SubmitForm'
import {
  CAREER_FORM_SCHEMA,
  CareerFormSchemaValues,
} from './career-form-schema'
import { CareerFormFields } from './CareerFormFields/CareerFormFields'

export default function CareerForm() {
  const form = useForm<CareerFormSchemaValues>({
    resolver: zodResolver(CAREER_FORM_SCHEMA),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      file: undefined,
    },
    mode: 'onTouched',
  })

  const { recaptchaSubmitStatus, submitWithRecaptcha } = useRecaptcha({
    form,
  })

  const { isSubmitSuccessful, isSubmitting, formControl, formError } =
    getHookFormFields(form)

  console.log(recaptchaSubmitStatus)

  return (
    <section>
      <fieldset disabled={isSubmitSuccessful || isSubmitting}>
        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(submitWithRecaptcha)}
          >
            <legend>
              If you are interested in this job offer, please send your CV.
            </legend>

            <CareerFormFields control={formControl} />
            <SubmitForm
              formError={formError}
              isSubmitting={isSubmitting}
              recaptchaSubmitStatus={recaptchaSubmitStatus}
              message={['Thank you', 'Your CV has been submitted']}
            />
            {formError && (
              <div className="text-red-600">{formError.message}</div>
            )}
          </form>
        </Form>
      </fieldset>
    </section>
  )
}
