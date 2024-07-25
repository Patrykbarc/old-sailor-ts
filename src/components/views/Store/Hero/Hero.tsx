import { SubpageTitle } from '@/components/ui/SubpageTitle/SubpageTitle'
import { Wrapper } from '@/components/ui/Wrapper/Wrapper'

export function Hero() {
  return (
    <header className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
      <Wrapper>
        <SubpageTitle
          title="The Old Sailor Barber Store"
          subtitle=" Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
        lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
        fugiat aliqua."
        />
      </Wrapper>
    </header>
  )
}
