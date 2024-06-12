import { ContactForm } from '@/components/views/ContactForm/ContactForm'
import { SubpageLayout } from '@/components/views/SubpageLayout/SubpageLayout'

export default function Contact() {
  return (
    <SubpageLayout>
      <article className="grid md:grid-cols-2 gap-8">
        <header className="z-20">
          <h1 className="mb-6 text-5xl font-bold text-primary">
            Do you have questions?
            <br />
            We&apos;ll be happy to help
          </h1>
        </header>
        <ContactForm />
      </article>
    </SubpageLayout>
  )
}
