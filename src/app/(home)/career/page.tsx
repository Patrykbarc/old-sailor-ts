'use client'

import { CareerForm } from '@/components/ui/_MainPage/Career/CareerForm/CareerForm'
import { CareerHeader } from '@/components/ui/_MainPage/Career/CareerHeader/CareerHeader'
import { CareerListSection } from '@/components/ui/_MainPage/Career/CareerListSection/CareerListSection'
import { Separator } from '@/components/ui/Separator/Separator'
import { SubpageLayout } from '@/components/views/MainPage/SubpageLayout/SubpageLayout'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

export default function Career() {
  if (!reCaptchaKey) {
    throw new Error('Missing required recaptchaKey')
  }

  return (
    <SubpageLayout>
      <article className="grid gap-12">
        <CareerHeader />
        <CareerListSection />
        <Separator className="opacity-15 max-w-lg" />
        <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
          <CareerForm />
        </GoogleReCaptchaProvider>
      </article>
    </SubpageLayout>
  )
}
