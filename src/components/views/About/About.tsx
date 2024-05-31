import { Wrapper } from '@/components/ui/Wrapper/Wrapper'
import { aboutUsTexts } from '@/lib/constants/aboutUsTexts'
import Image from 'next/image'

export function About() {
	return (
		<section className='my-24'>
			<Wrapper className='flex-col'>
				<h1 className='mb-6 text-5xl font-bold uppercase text-primary'>about us</h1>
				<div className='grid gap-36'>
					{aboutUsTexts.map(({ id, text, image }, index) => {
						const isOdd = index % 2 === 0
						const isOddStyle = 'md:order-1'
						const isEvenStyle = 'md:order-2'
						return (
							<div
								key={id}
								className='text-xl grid grid-cols-1 md:grid-cols-2 gap-16'>
								<div
									className={`flex flex-col gap-4 ${
										isOdd ? isOddStyle : isEvenStyle
									}`}>
									{text}
								</div>
								<div
									className={`rounded-lg overflow-hidden max-h-[550px] h-fit shadow-xl lg:h-fit ${isOddStyle}`}>
									<Image alt='placeholder' className={`w-full`} src={image} />
								</div>
							</div>
						)
					})}
				</div>
			</Wrapper>
		</section>
	)
}
