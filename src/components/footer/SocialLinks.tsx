import Icon, { type IconName } from '../common/Icon'
import './SocialLinks.css'

const socials: { name: IconName; label: string; href: string }[] = [
  { name: 'instagram', label: 'Instagram', href: '#' },
  { name: 'facebook', label: 'Facebook', href: '#' },
  { name: 'twitter', label: 'Twitter', href: '#' },
]

export default function SocialLinks() {
  return (
    <div className="social-links">
      {socials.map((social) => (
        <a key={social.name} href={social.href} aria-label={social.label} className="social-links__item">
          <Icon name={social.name} size={16} />
        </a>
      ))}
    </div>
  )
}
