import { SubpageTitle } from '@/components/ui/SubpageTitle/SubpageTitle'
import { SubpageLayout } from '@/components/views/MainPage/SubpageLayout/SubpageLayout'

const POLICY_PRIVACY_LIST_ITEMS = [
  'Information we collect: In order to register and provide services at our salon, we collect the following information from our customers: name, phone number, email address, and visit history at our salon.',
  'How we use your information: We use your information to contact you in case of issues with booking or cancellation of appointments, and to send you information about promotions and special offers available at our salon.',
  'Disclosure of information: We do not disclose your information to third parties without your consent, except where we are required to do so by law or to protect our rights or property.',
  'Information protection: We employ appropriate security measures to protect your information from unauthorized access, disclosure, alteration or destruction.',
  'Retention of information: We retain your information for as long as necessary to fulfill the purposes for which it was collected.',
  'Your rights: You have the right to request access to, update or delete your personal information, and to object to the processing of your personal information.',
  'Contact: If you have any questions or concerns about our privacy policy, please contact us via email or phone as provided on our website.',
]

export default function PrivacyPolicy() {
  return (
    <SubpageLayout>
      <div className="mb-12">
        <SubpageTitle
          title="The Old Sailor Privacy Policy"
          subtitle="Our barber salon is committed to protecting the privacy of our customers. Below,
					we provide information on how we collect and protect your personal information."
        />
      </div>
      <ol className="grid gap-3 list-decimal text-lg list-inside marker:text-primary">
        {POLICY_PRIVACY_LIST_ITEMS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </SubpageLayout>
  )
}
