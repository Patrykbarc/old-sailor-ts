import { AOSWrapper } from '@/components/ui/AOS/AOSWrapper/AOSWrapper'
import { About } from '@/components/views/MainPage/About/About'
import { ContactCTA } from '@/components/views/MainPage/ContactCTA/ContactCTA'
import { Hero } from '@/components/views/MainPage/Hero/Hero'

export default function Home() {
  return (
    <AOSWrapper>
      <Hero />
      <main className="flex items-center justify-between flex-col">
        <About />
        <ContactCTA />
      </main>
    </AOSWrapper>
  )
}
