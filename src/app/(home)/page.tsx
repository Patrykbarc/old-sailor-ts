import { About } from '@/components/views/MainPage/About/About'
import { ContactCTA } from '@/components/views/MainPage/ContactCTA/ContactCTA'
import { Hero } from '@/components/views/MainPage/Hero/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex items-center justify-between flex-col">
        <About />
        <ContactCTA />
      </main>
    </>
  )
}
