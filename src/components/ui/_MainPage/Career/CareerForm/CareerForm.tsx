import { Input } from '@/components/ui/Input/Input'
import { Label } from '@/components/ui/Label/Label'

export function CareerForm() {
  return (
    <section>
      <form action="">
        <fieldset>
          <legend>
            If you are interested in this job offer, please send your CV and
            portfolio.
          </legend>

          <div className="grid grid-cols-2 w-full max-w-sm items-center gap-1.5">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" />
            </div>

            <div>
              <Label htmlFor="surname">Surname</Label>
              <Input id="surname" type="text" />
            </div>
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="cv">CV</Label>
            <Input id="cv" type="file" />
          </div>
        </fieldset>
      </form>
    </section>
  )
}
