import Icon, { type IconName } from './Icon'
import './Badge.css'

type BadgeProps = {
  icon: IconName
  label: string
}

export default function Badge({ icon, label }: BadgeProps) {
  return (
    <span className="badge">
      <Icon name={icon} size={14} className="badge__icon" />
      {label}
    </span>
  )
}
