'use client'

import { ContactForm } from '@/components/ui/_MainPage/Contact/ContactForm/ContactForm'
import { SubpageLayout } from '@/components/views/MainPage/SubpageLayout/SubpageLayout'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

export default function Contact() {
  if (!reCaptchaKey) {
    throw new Error('Missing required recaptchaKey')
  }

  return (
    <SubpageLayout>
      <article className="grid md:grid-cols-2 items-center gap-8">
        <header className="z-20">
          <h1 className="mb-6 text-5xl font-black leading-tight text-primary">
            Do you have questions?
            <br />
            We&apos;ll be happy to help
          </h1>
        </header>
        <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
          <ContactForm />
        </GoogleReCaptchaProvider>
      </article>
    </SubpageLayout>
  )
}
