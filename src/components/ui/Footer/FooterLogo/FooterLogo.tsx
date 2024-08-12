import Image from 'next/image'
import LOGO from '/public/old-sailor-logo-vertical.png'

export function FooterLogo() {
  return (
    <Image
      className="h-fit mb-8 md:mb-0"
      height={92}
      width={107}
      src={LOGO}
      alt="Old Sailor Barber logo"
    />
  )
}
