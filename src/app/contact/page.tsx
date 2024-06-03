import { Wrapper } from '@/components/ui/Wrapper/Wrapper'
import { ContactForm } from '@/components/views/ContactForm/ContactForm'
import PLACEHOLDER from '../../../public/placeholder.jpg'
import Image from 'next/image'

export default function Contact() {
	return (
		<Wrapper className='flex-col w-full'>
			<div className='grid grid-cols-2 gap-8'>
				<div className='rounded-lg overflow-hidden'>
					<h1 className='mb-6 text-5xl font-bold text-primary'>
						Do you have questions?
						<br />
						We&apos;ll be happy to help
					</h1>

					<Image className='w-full' src={PLACEHOLDER} alt='placeholder' />
				</div>
				<ContactForm />
			</div>
		</Wrapper>
	)
}
