import { Button, buttonVariants } from '@/components/ui/Button/Button'
import { VariantProps } from 'class-variance-authority'
import Link from 'next/link'

type StoreLinkButtonProps = VariantProps<typeof buttonVariants> & {
  href: string
  text: string
  className?: string
  external?: boolean
}

export function StoreLinkButton({
  href,
  text,
  size = 'xl',
  variant = 'default',
  external = false,
  className,
}: StoreLinkButtonProps) {
  return (
    <div className={`${className}`}>
      <Link href={external ? href : `/store/${href}`}>
        <Button className="w-full capitalize" size={size} variant={variant}>
          {text}
        </Button>
      </Link>
    </div>
  )
}
