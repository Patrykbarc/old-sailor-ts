import Image from 'next/image'

type CartProductImageProps = {
  src: string
  alt: string
}

export function CartProductImage({ src, alt }: CartProductImageProps) {
  return (
    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <Image
        width={95}
        height={95}
        quality={30}
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-center"
      />
    </div>
  )
}
