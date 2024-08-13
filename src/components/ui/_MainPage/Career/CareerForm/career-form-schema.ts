import { z } from 'zod'

export type CareerFormSchemaValues = z.infer<typeof CAREER_FORM_SCHEMA>

export const CAREER_FORM_SCHEMA = z.object({
  name: z.string().min(2, {
    message: 'Must be at least 2 characters.',
  }),
  surname: z.string().min(2, {
    message: 'Must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  file: z.preprocess(
    (file) => {
      if (!(file instanceof File)) {
        {
          message: 'The file must be provided'
        }
      }
      return file
    },
    z
      .instanceof(File, { message: 'The file must be provided' })
      .refine((file) => file.size > 0, {
        message: 'The file must not be empty',
      })
      .refine(
        (file) =>
          ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'].includes(
            file.type
          ),
        {
          message: 'Only PNG, JPG, JPEG, or PDF files are allowed.',
        }
      )
  ),
})
