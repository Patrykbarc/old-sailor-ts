import { About } from '@/components/views/About/About'
import { ContactCTA } from '@/components/views/ContactCTA/ContactCTA'
import { Hero } from '@/components/views/Hero/Hero'

export default function Home() {
	return (
		<main className='flex overflow-x-hidden min-h-screen flex-col items-center justify-between bg-neutral-900 text-neutral-300'>
			<Hero />
			<About />
			<ContactCTA />
		</main>
	)
}
