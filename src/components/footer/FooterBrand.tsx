import Logo from '../common/Logo'
import Text from '../common/Text'
import SocialLinks from './SocialLinks'
import './FooterBrand.css'

export default function FooterBrand() {
  return (
    <div className="footer-brand">
      <Logo />
      <Text color="fg-on-dark" className="footer-brand__description">
        Artisanal wood-fired sourdough pizzas crafted with 48-hour fermented dough and imported
        San Marzano ingredients. Delivered fresh and piping hot.
      </Text>
      <SocialLinks />
    </div>
  )
}
