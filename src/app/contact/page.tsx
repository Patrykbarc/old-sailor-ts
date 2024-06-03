import { Wrapper } from '@/components/ui/Wrapper/Wrapper'
import { ContactForm } from '@/components/views/ContactForm/ContactForm'
import CONTACT_IMAGE from '../../../public/contact-image.png'
import Image from 'next/image'

export default function Contact() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between bg-neutral-900 relative overflow-hidden'>
			<Wrapper className='flex-col min-h-dvh py-24 relative z-10'>
				<div className='grid md:grid-cols-2 gap-8'>
					<div className='z-20'>
						<h1 className='mb-6 text-5xl font-bold text-primary'>
							Do you have questions?
							<br />
							We&apos;ll be happy to help
						</h1>
					</div>

					<ContactForm />
				</div>
			</Wrapper>
			<Image
				className='scale-[160%] md:scale-100 top-1/3 sm:top-0 sm:left-1/3 w-full z-0 absolute pointer-events-none opacity-5'
				src={CONTACT_IMAGE}
				width='1024'
				height='1024'
				alt='placeholder'
			/>
		</main>
	)
}
