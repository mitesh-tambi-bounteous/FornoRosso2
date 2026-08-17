import Icon, { type IconName } from '../common/Icon'
import './IconTextBlock.css'

type IconTextBlockProps = {
  icon: IconName
  title: string
  body: string
}

export default function IconTextBlock({ icon, title, body }: IconTextBlockProps) {
  return (
    <div className="icon-text-block">
      <span className="icon-text-block__icon">
        <Icon name={icon} size={20} />
      </span>
      <div>
        <p className="icon-text-block__title">{title}</p>
        <p className="icon-text-block__body">{body}</p>
      </div>
    </div>
  )
}
