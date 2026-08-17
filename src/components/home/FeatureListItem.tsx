import Icon, { type IconName } from '../common/Icon'
import './FeatureListItem.css'

type FeatureListItemProps = {
  icon: IconName
  title: string
  body: string
}

export default function FeatureListItem({ icon, title, body }: FeatureListItemProps) {
  return (
    <div className="feature-list-item">
      <span className="feature-list-item__icon">
        <Icon name={icon} size={16} />
      </span>
      <div>
        <p className="feature-list-item__title">{title}</p>
        <p className="feature-list-item__body">{body}</p>
      </div>
    </div>
  )
}
