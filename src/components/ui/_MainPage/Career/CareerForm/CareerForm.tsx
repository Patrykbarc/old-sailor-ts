'use client'

import { Button } from '@/components/ui/Button/Button'
import { Form } from '@/components/ui/Form/Form'
import { useRecaptcha } from '@/lib/customHooks/useRecaptcha'
import { getHookFormFields } from '@/lib/functions/helpers/getHookFormFields'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  CAREER_FORM_SCHEMA,
  CareerFormSchemaValues,
} from './career-form-schema'
import { CareerFormFields } from './CareerFormFields/CareerFormFields'

export function CareerForm() {
  const form = useForm<CareerFormSchemaValues>({
    resolver: zodResolver(CAREER_FORM_SCHEMA),
    defaultValues: {
      name: '',
      surname: '',
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
          <form onSubmit={form.handleSubmit(submitWithRecaptcha)}>
            <legend>
              If you are interested in this job offer, please send your CV and
              portfolio.
            </legend>

            <CareerFormFields control={formControl} />
            {/* <div className="space-y-6 w-full max-w-md">
              <div className="grid md:grid-cols-2 gap-4">
                <InputField
                  control={formControl}
                  name="name"
                  placeholder="Your name"
                />
                <InputField
                  control={formControl}
                  name="surname"
                  placeholder="Your surname"
                />
              </div>
              <InputField
                control={formControl}
                name="email"
                type="email"
                placeholder="Your email"
              />

              <FileInputField
                control={formControl}
                name="file"
                placeholder="Your CV"
                label="PNG, JPG, JPEG, or PDF"
              ></FileInputField>
            </div> */}

            {formError && (
              <div className="text-red-600">{formError.message}</div>
            )}

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </fieldset>
    </section>
  )
}
