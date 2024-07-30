import { CareerForm } from '@/components/ui/_MainPage/Career/CareerForm/CareerForm'
import { CareerHeader } from '@/components/ui/_MainPage/Career/CareerHeader/CareerHeader'
import { CareerListSection } from '@/components/ui/_MainPage/Career/CareerListSection/CareerListSection'
import { SubpageLayout } from '@/components/views/MainPage/SubpageLayout/SubpageLayout'

export default function Career() {
  return (
    <SubpageLayout>
      <article className="grid gap-12">
        <CareerHeader />
        <CareerListSection />
        <CareerForm />
      </article>
    </SubpageLayout>
  )
}
