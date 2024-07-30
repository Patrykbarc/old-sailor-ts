import { HeroShadow } from '@/components/ui/HeroShadow/HeroShadow'
import { SubpageTitle } from '@/components/ui/SubpageTitle/SubpageTitle'
import { Wrapper } from '@/components/ui/Wrapper/Wrapper'

export function Hero() {
  return (
    <header className="overflow-hidden">
      <div className="bg-hero-store-pattern w-screen h-screen max-w-full bg-cover bg-no-repeat relative">
        <HeroShadow />
        <div className="mx-auto max-w-4xl h-full flex flex-col justify-center py-32 sm:py-48 lg:py-56 text-center relative">
          <Wrapper>
            <SubpageTitle
              title="The Old Sailor Barber Store"
              subtitle="Step into a world where the spirit of the sea meets the art of grooming. At The Old Sailor Barber Store, we honor the tradition of classic barbering while embracing the latest trends and techniques. "
            />
          </Wrapper>
        </div>
      </div>
    </header>
  )
}
