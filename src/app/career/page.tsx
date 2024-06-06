import { ListSection } from '@/components/ui/ListSection/ListSection'
import { SubpageLayout } from '@/components/views/SubpageLayout/SubpageLayout'

const jobDetails = {
	responsibilities: [
		"Cutting and styling men's hair",
		'Coloring and grooming beards',
		'Customer service and ensuring customer satisfaction',
		'Adhering to sanitation and safety standards',
	],
	expectations: [
		'Experience working as a barber',
		'Ability to cut various types of hairstyles',
		'Ability to use cutting and grooming machines',
		'Ability to work with customers and ensure their satisfaction',
		'Availability to work various hours',
	],
	benefits: [
		'Opportunities for professional development and improving your skills',
		'Working in a dynamic and friendly team',
		'Attractive compensation',
		'Opportunities to attend training and development courses',
	],
	offer: [
		'Stable employment with a contract',
		'Work in a reputable hair salon',
		'Attractive compensation and performance-based bonuses',
		'Opportunities for professional development and improving your skills',
		'Work in a friendly team',
	],
}

export default function Career() {
	return (
		<SubpageLayout>
			<div className='grid gap-12'>
				<div>
					<h1 className='mb-5 text-5xl font-bold uppercase text-primary'>Job Offer</h1>
					<h2 className='text-xl uppercase font-bold'>
						<span>The Old Sailor Barber</span> is seeking an experienced barber to join
						our team.
					</h2>
				</div>

				<div className='grid gap-6'>
					<ListSection
						title='Job Responsibilities:'
						items={jobDetails.responsibilities}
					/>
					<ListSection
						title='Our expectations of the candidate:'
						items={jobDetails.expectations}
					/>
					<ListSection
						title='What you can gain by working with us:'
						items={jobDetails.benefits}
					/>
					<ListSection title='What we offer:' items={jobDetails.offer} />
				</div>

				<div>
					<p>
						If you are interested in this job offer, please send your CV and portfolio.
					</p>
					<form action=''>
						<div>
							<input type='text' placeholder='Name and surname' />
							<input type='file' placeholder='Name and surname' />
						</div>
					</form>
				</div>
			</div>
		</SubpageLayout>
	)
}
