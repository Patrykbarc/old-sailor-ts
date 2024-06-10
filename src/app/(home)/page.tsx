import { About } from "@/components/views/About/About"
import { ContactCTA } from "@/components/views/ContactCTA/ContactCTA"
import { Footer } from "@/components/views/Footer/Footer"
import { Hero } from "@/components/views/Hero/Hero"

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
