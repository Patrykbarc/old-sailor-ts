'use client'

import { Button } from '@/components/ui/Button/Button'
import { Form } from '@/components/ui/Form/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Control, useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchema } from './formSchema'
import { InputField } from './InputField/InputField'
import { MessageSentNotification } from './MessageSentNotification/MessageSentNotification'
import { TextAreaField } from './TextAreaField/TextAreaField'

export type ContactFormFieldProps = {
  control: Control<z.infer<typeof formSchema>>
  name: keyof z.infer<typeof formSchema>
  placeholder: string
}

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      message: '',
    },
    mode: 'onTouched',
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="border-2 w-full h-fit p-8 rounded-lg bg-neutral-900 text-neutral-900 shadow-xl">
      {!form.formState.isSubmitSuccessful ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      ) : (
        <MessageSentNotification />
      )}
    </div>
  )
}
