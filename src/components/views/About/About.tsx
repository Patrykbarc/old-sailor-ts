import { Wrapper } from '@/components/ui/Wrapper/Wrapper'
import PLACEHOLDER from '../../../../public/placeholder.jpg'
import Image from 'next/image'

const aboutTexts = [
	{
		id: 1,
		text: (
			<>
				<p>
					Old Sailor is a barbershop that was born out of a love for nautical adventures
					and good grooming.
				</p>
				<p>
					It all started five years ago when our founder, a former sailor, decided to
					start his own nautical store. In the meantime, thanks to his skills acquired
					during months of sea voyages, he also started offering barbering services to his
					customers, who were looking for a place where they could take care of their hair
					and beards.
				</p>
				<p>
					Over time, the nautical supply store evolved into a full-fledged barbershop, and
					Old Sailor became a place where men could take care of their appearance and
					relax during their visit. Today, Old Sailor is a place where you can relax and
					take care of your haircut and beard, and our staff are skilled barbers who are
					always willing to help you choose the right style and take care of your haircut
					with the utmost care.
				</p>
			</>
		),
	},
	{
		id: 2,
		text: (
			<>
				<p>
					Old Sailor is a barbershop that was born out of a love for nautical adventures
					and good grooming.
				</p>
				<p>
					It all started five years ago when our founder, a former sailor, decided to
					start his own nautical store. In the meantime, thanks to his skills acquired
					during months of sea voyages, he also started offering barbering services to his
					customers, who were looking for a place where they could take care of their hair
					and beards.
				</p>
				<p>
					Over time, the nautical supply store evolved into a full-fledged barbershop, and
					Old Sailor became a place where men could take care of their appearance and
					relax during their visit. Today, Old Sailor is a place where you can relax and
					take care of your haircut and beard, and our staff are skilled barbers who are
					always willing to help you choose the right style and take care of your haircut
					with the utmost care.
				</p>
			</>
		),
	},
	{
		id: 3,
		text: (
			<>
				<p>
					Old Sailor is a barbershop that was born out of a love for nautical adventures
					and good grooming.
				</p>
				<p>
					It all started five years ago when our founder, a former sailor, decided to
					start his own nautical store. In the meantime, thanks to his skills acquired
					during months of sea voyages, he also started offering barbering services to his
					customers, who were looking for a place where they could take care of their hair
					and beards.
				</p>
				<p>
					Over time, the nautical supply store evolved into a full-fledged barbershop, and
					Old Sailor became a place where men could take care of their appearance and
					relax during their visit. Today, Old Sailor is a place where you can relax and
					take care of your haircut and beard, and our staff are skilled barbers who are
					always willing to help you choose the right style and take care of your haircut
					with the utmost care.
				</p>
			</>
		),
	},
]

export function About() {
	return (
		<section className='my-24'>
			<Wrapper>
				<h1 className='mb-6 font-title text-5xl font-bold uppercase text-primary'>
					about us
				</h1>
				<div className='grid gap-36'>
					{aboutTexts.map(({ text, id }, index) => {
						const isOdd = index % 2 === 0
						const isOddStyle = 'order-1'
						const isEvenStyle = 'order-2'
						return (
							<div key={id} className='text-lg grid grid-cols-2 gap-16'>
								<div
									className={`flex flex-col gap-4 ${
										isOdd ? isOddStyle : isEvenStyle
									}`}>
									{text}
								</div>
								<Image
									alt='placeholder'
									className={`w-full ${isOddStyle}`}
									src={PLACEHOLDER}
								/>
							</div>
						)
					})}
				</div>
			</Wrapper>
		</section>
	)
}
