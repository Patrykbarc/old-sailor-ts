import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(2, {
      message: 'Must be at least 2 characters.',
    }),
    surname: z.string().min(2, {
      message: 'Must be at least 2 characters.',
    }),
    email: z.string().email({
      message: 'Please enter a valid email address.',
    }),
    message: z.string().min(10, {
      message: 'Message must be at least 10 characters long.',
    }),
  })
  