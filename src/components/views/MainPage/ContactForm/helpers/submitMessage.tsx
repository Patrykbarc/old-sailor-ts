import { axiosAPI } from '@/lib/axios/axiosAPI'
import { RecaptchaSubmitStatus } from '@/lib/types/contactForm/RecaptchaSubmitStatus'
import { Dispatch, SetStateAction } from 'react'
import { IGoogleReCaptchaConsumerProps } from 'react-google-recaptcha-v3'
import { UseFormClearErrors, UseFormSetError } from 'react-hook-form'
import { ContactFormSchemaValues } from './contactFormSchema'

type SubmitMessageProps = {
  executeRecaptcha: IGoogleReCaptchaConsumerProps['executeRecaptcha']
  setRecaptchaSubmitStatus: Dispatch<SetStateAction<RecaptchaSubmitStatus>>
  setError: UseFormSetError<ContactFormSchemaValues>
  clearErrors: UseFormClearErrors<ContactFormSchemaValues>
}

export async function submitMessage({
  executeRecaptcha,
  setRecaptchaSubmitStatus,
  setError,
  clearErrors,
}: SubmitMessageProps) {
  if (!executeRecaptcha) {
    console.error('ReCAPTCHA not available')
    setError('formError', {
      type: 'manual',
      message: 'ReCAPTCHA is not available. Please try again later.',
    })
    return
  }

  const gRecaptchaToken = await executeRecaptcha('registerSubmit')

  try {
    const response = await axiosAPI.post('/api/recaptchaSubmit', {
      gRecaptchaToken,
    })

    if (response.data.success) {
      setRecaptchaSubmitStatus('success')
      clearErrors('formError')
    } else {
      console.error(`Registration failure with score: ${response.data.score}`)
      setRecaptchaSubmitStatus('failed')
      setError('formError', {
        type: 'manual',
        message:
          'Submission failed due to low reCAPTCHA score. Please try again.',
      })
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    setRecaptchaSubmitStatus('failed')
    setError('formError', {
      type: 'manual',
      message: 'An error occurred during submission. Please try again.',
    })
  }
}
