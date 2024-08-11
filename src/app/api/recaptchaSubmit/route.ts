import axios from 'axios'
import { NextResponse } from 'next/server'

type PostData = {
  gRecaptchaToken: string
}

export async function POST(req: Request) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY is not set in environment variables.')
    return NextResponse.json(
      { success: false, error: 'Server configuration error' },
      { status: 500 }
    )
  }

  let postData: PostData
  try {
    postData = await req.json()
  } catch (error) {
    console.error('Error parsing JSON body:', error)
    return NextResponse.json(
      { success: false, error: 'Bad request' },
      { status: 400 }
    )
  }

  const { gRecaptchaToken } = postData
  const formData = `secret=${secretKey}&response=${gRecaptchaToken}`

  try {
    const response = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      formData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )

    if (response.data.success && response.data.score > 0.5) {
      console.log('ReCaptcha score:', response.data.score)
      return NextResponse.json(
        {
          success: true,
          score: response.data.score,
        },
        { status: 200 }
      )
    } else {
      console.error('ReCaptcha verification failed:', response.data)
      return NextResponse.json(
        { success: false, error: 'ReCaptcha verification failed' },
        { status: 403 }
      )
    }
  } catch (error) {
    console.error('Error during ReCaptcha verification:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
