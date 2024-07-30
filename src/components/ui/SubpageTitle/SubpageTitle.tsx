type SubpageTitleProps = {
  title: string
  subtitle?: string
}

export function SubpageTitle({ title, subtitle }: SubpageTitleProps) {
  return (
    <hgroup>
      <h1 className="mb-5 text-6xl font-black leading-tight uppercase text-primary">
        {title}
      </h1>
      {subtitle && <h2 className="text-2xl uppercase font-bold">{subtitle}</h2>}
    </hgroup>
  )
}
