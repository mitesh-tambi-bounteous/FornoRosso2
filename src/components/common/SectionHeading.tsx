import './SectionHeading.css'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  align?: 'center' | 'left'
  divider?: boolean
  eyebrowColor?: 'brand' | 'accent-green'
}

export default function SectionHeading({
  eyebrow,
  title,
  align = 'center',
  divider = false,
  eyebrowColor = 'brand',
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className={`section-heading__eyebrow section-heading__eyebrow--${eyebrowColor}`}>
        {eyebrow}
      </p>
      <h2 className="section-heading__title">{title}</h2>
      {divider && <span className="section-heading__rule" />}
    </div>
  )
}
