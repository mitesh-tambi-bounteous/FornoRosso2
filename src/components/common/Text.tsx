import type { ReactNode } from 'react'
import './Text.css'

type TextProps = {
  children: ReactNode
  color?: 'fg' | 'fg-on-dark' | 'muted'
  className?: string
}

export default function Text({ children, color = 'fg', className }: TextProps) {
  return <p className={['text', `text--${color}`, className].filter(Boolean).join(' ')}>{children}</p>
}
