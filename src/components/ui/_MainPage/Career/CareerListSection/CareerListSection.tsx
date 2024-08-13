import { ListSection } from '@/components/ui/ListSection/ListSection'
import { JOB_DETAILS } from './job-details'

export function CareerListSection() {
  return (
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
  )
}
