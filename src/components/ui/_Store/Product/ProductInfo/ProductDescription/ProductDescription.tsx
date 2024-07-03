type ProductDescriptionProps = {
  description: string
}

export function ProductDescription({ description }: ProductDescriptionProps) {
  return (
    <div>
      <h3 className="sr-only">Description</h3>

      <div className="space-y-6">
        <p className="text-base text-neutral-900">{description}</p>
      </div>
    </div>
  )
}
