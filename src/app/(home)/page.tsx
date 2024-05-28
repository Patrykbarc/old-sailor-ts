import { Wrapper } from '@/components/ui/Wrapper/Wrapper'
import { Hero } from '@/components/views/Hero/Hero'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between bg-neutral-900'>
			<Hero />
		</main>
	)
}
