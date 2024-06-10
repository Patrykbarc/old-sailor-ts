type ListSectionProps = {
  title: string
  items: string[]
}

export function ListSection({ title, items }: ListSectionProps) {
  return (
    <div>
      <h3 className="text-xl mb-1 uppercase font-bold">{title}</h3>
      <ul className="grid list-disc text-lg list-inside marker:text-primary">
        {items.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </div>
  )
}
