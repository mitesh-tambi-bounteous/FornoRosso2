import type { ElementType } from 'react'
import './Heading.css'

type HeadingProps = {
  level: 1 | 2 | 3
  text: string
  accentRun?: string
  className?: string
}

export default function Heading({ level, text, accentRun, className }: HeadingProps) {
  const Tag = `h${level}` as ElementType

  return (
    <Tag className={['heading', className].filter(Boolean).join(' ')}>
      {text}
      {accentRun && (
        <>
          <br />
          <span className="heading__accent">{accentRun}</span>
        </>
      )}
    </Tag>
  )
}
