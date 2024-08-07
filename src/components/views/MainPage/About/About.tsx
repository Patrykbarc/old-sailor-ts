import { Wrapper } from '@/components/ui/Wrapper/Wrapper'

import Image from 'next/image'
import { ABOUT_US_TEXTS } from './about-us-texts'

export function About() {
  return (
    <section className="my-24">
      <Wrapper className="flex-col">
        <h1 className="mb-6 text-5xl font-bold uppercase text-primary">
          about us
        </h1>
        <div className="grid gap-36">
          {ABOUT_US_TEXTS.map(({ id, text, image }, index) => {
            const isOdd = index % 2 === 0
            const isOddStyle = 'md:order-1'
            const isEvenStyle = 'md:order-2'
            return (
              <div
                key={id}
                className="text-xl grid grid-cols-1 md:grid-cols-2 gap-16"
              >
                <div
                  className={`flex flex-col gap-4 ${
                    isOdd ? isOddStyle : isEvenStyle
                  }`}
                  data-aos="zoom-in-down"
                >
                  {text}
                </div>
                <div
                  className={`rounded-lg overflow-hidden max-h-[550px] h-fit shadow-xl lg:h-fit ${isOddStyle}`}
                >
                  <Image
                    alt="placeholder"
                    className={`w-full`}
                    src={image}
                    data-aos="zoom-in-up"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </Wrapper>
    </section>
  )
}
