'use client'

import { Button } from '@/components/ui/Button/Button'
import { Form } from '@/components/ui/Form/Form'
import { FileInputField } from '@/components/ui/FormFields/FileInputField/FileInputField'
import { useRecaptcha } from '@/lib/customHooks/useRecaptcha'
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldError, useForm } from 'react-hook-form'
import { InputField } from '../../../FormFields/InputField/InputField'
import {
  CAREER_FORM_SCHEMA,
  CareerFormSchemaValues,
} from './career-form-schema'

export function CareerForm() {
  const form = useForm<CareerFormSchemaValues>({
    resolver: zodResolver(CAREER_FORM_SCHEMA),
    defaultValues: {
      name: 'Test',
      surname: 'Test',
      file: undefined,
    },
    mode: 'onTouched',
  })

  const { recaptchaSubmitStatus, submitWithRecaptcha } = useRecaptcha({
    form,
  })

  const formControl = form.control
  const formError = form.formState.errors.root as FieldError | undefined
  console.log(recaptchaSubmitStatus)

  return (
    <section>
      <fieldset>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitWithRecaptcha)}>
            <legend>
              If you are interested in this job offer, please send your CV and
              portfolio.
            </legend>

            <div className="grid w-full max-w-sm items-center gap-1.5">
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
              <FileInputField
                control={formControl}
                name="file"
                placeholder="Your CV"
              />
            </div>

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
