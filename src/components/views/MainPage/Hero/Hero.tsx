import { Button } from '@/components/ui/Button/Button'
import { Wrapper } from '@/components/ui/Wrapper/Wrapper'

export function Hero() {
  return (
    <header>
      <div className="bg-hero-pattern w-screen h-screen max-w-full bg-cover bg-no-repeat relative">
        <div className="bg-shadow-gradient absolute w-screen h-screen" />
        <Wrapper className="min-w-[100vw] items-center absolute h-full">
          <div className="grid gap-12 text-center md:text-left">
            <h1 className="font-black text-6xl md:text-8xl text-primary">
              The Old Sailor Barber
            </h1>
            <p className="font-body text-2xl max-w-[600px] md:text-4xl">
              A place where style and elegance combine with nautical tradition.
            </p>
            <Button className="md:w-fit" variant="cta" size="xl">
              Book your visit
            </Button>
          </div>
        </Wrapper>
      </div>
    </header>
  )
}
