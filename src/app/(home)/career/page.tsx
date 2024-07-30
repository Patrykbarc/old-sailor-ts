import { ListSection } from '@/components/ui/ListSection/ListSection'
import { SubpageTitle } from '@/components/ui/SubpageTitle/SubpageTitle'
import { SubpageLayout } from '@/components/views/MainPage/SubpageLayout/SubpageLayout'
import { JOB_DETAILS } from '../../../lib/constants/job-details'

export default function Career() {
  return (
    <SubpageLayout>
      <article className="grid gap-12">
        <header>
          <SubpageTitle
            title="Job Offer"
            subtitle="The Old Sailor Barber is seeking an experienced barber to join our team."
          />
        </header>

        <section className="grid gap-6">
          <ListSection
            title="Job Responsibilities:"
            items={JOB_DETAILS.responsibilities}
          />
          <ListSection
            title="Our expectations of the candidate:"
            items={JOB_DETAILS.expectations}
          />
          <ListSection
            title="What you can gain by working with us:"
            items={JOB_DETAILS.benefits}
          />
          <ListSection title="What we offer:" items={JOB_DETAILS.offer} />
        </section>

        <section>
          <form action="">
            <fieldset>
              <legend>
                {' '}
                If you are interested in this job offer, please send your CV and
                portfolio.
              </legend>
              <input type="text" placeholder="Name and surname" />
              <input type="file" placeholder="Name and surname" />
            </fieldset>
          </form>
        </section>
      </article>
    </SubpageLayout>
  )
}
