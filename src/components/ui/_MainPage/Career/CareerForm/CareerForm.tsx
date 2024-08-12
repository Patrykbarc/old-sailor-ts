'use client'

import { Form } from '@/components/ui/Form/Form'
import { FileInputField } from '@/components/ui/FormFields/FileInputField/FileInputField'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { InputField } from '../../../FormFields/InputField/InputField'

export type CareerFormSchemaValues = z.infer<typeof careerFormSchema>

export const careerFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Must be at least 2 characters.',
  }),
  surname: z.string().min(2, {
    message: 'Must be at least 2 characters.',
  }),
  file: z
    .instanceof(File)
    .refine((file) => file.size > 0, {
      message: 'The file must not be empty',
    })
    .refine(
      (file) => ['image/png', 'image/jpeg', 'image/jpg'].includes(file.type),
      {
        message: 'Only PNG, JPG or JPEG files are allowed.',
      }
    )
    .nullable(),
})

export function CareerForm() {
  const form = useForm<z.infer<typeof careerFormSchema>>({
    resolver: zodResolver(careerFormSchema),
    defaultValues: {
      name: '',
      surname: '',
      file: undefined,
    },
    mode: 'onTouched',
  })

  const formControl = form.control

  return (
    <section>
      <fieldset>
        <Form {...form}>
          <form action="">
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
          </form>
        </Form>
      </fieldset>
    </section>
  )
}
