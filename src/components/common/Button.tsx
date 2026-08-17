import type { MouseEventHandler, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Icon, { type IconName } from './Icon'
import './Button.css'

type ButtonVariant = 'primary' | 'outline' | 'dark'

type ButtonProps = {
  label: string
  variant: ButtonVariant
  icon?: IconName
  iconPosition?: 'leading' | 'trailing'
  to?: string
  onClick?: MouseEventHandler
  className?: string
}

export default function Button({
  label,
  variant,
  icon,
  iconPosition = 'trailing',
  to,
  onClick,
  className,
}: ButtonProps) {
  const content: ReactNode = (
    <>
      {icon && iconPosition === 'leading' && <Icon name={icon} size={16} />}
      <span>{label}</span>
      {icon && iconPosition === 'trailing' && <Icon name={icon} size={16} />}
    </>
  )

  const classes = ['button', `button--${variant}`, className].filter(Boolean).join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {content}
    </button>
  )
}
