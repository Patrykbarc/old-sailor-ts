import { SubpageLayout } from '@/components/views/SubpageLayout/SubpageLayout'
import { policyPrivacyListItems } from '@/lib/constants/policyPrivacyListItems'

export default function PrivacyPolicy() {
	return (
		<SubpageLayout>
			<div className='mb-12'>
				<h1 className='mb-5 text-5xl font-bold uppercase text-primary'>
					The Old Sailor Privacy Policy
				</h1>
				<h2 className='text-xl uppercase font-bold'>
					Our barber salon is committed to protecting the privacy of our customers. Below,
					we provide information on how we collect and protect your personal information.
				</h2>
			</div>
			<ol className='grid gap-3 list-decimal text-lg list-inside marker:text-primary'>
				{policyPrivacyListItems.map(item => {
					return <li key={item}>{item}</li>
				})}
			</ol>
		</SubpageLayout>
	)
}
