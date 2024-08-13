import { z } from 'zod'

export type CareerFormSchemaValues = z.infer<typeof CAREER_FORM_SCHEMA>

export const CAREER_FORM_SCHEMA = z.object({
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
      (file) =>
        ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'].includes(
          file.type
        ),
      {
        message: 'Only PNG, JPG, JPEG, or PDF files are allowed.',
      }
    )
    .nullable(),
})
