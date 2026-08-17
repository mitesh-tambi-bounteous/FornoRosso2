import Badge from '../common/Badge'
import Heading from '../common/Heading'
import Text from '../common/Text'
import Button from '../common/Button'
import HeroImage from '../common/HeroImage'
import heroImage from '../../assets/hero-margherita.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <Badge icon="flame" label="Authentic Neapolitan Woodfired" />
        <Heading level={1} text="Wood-Fired Pizza," accentRun="Delivered Hot" className="hero__heading" />
        <Text color="fg-on-dark">
          Baked at 900°F in our stone ovens to perfect charred perfection. Handcrafted sourdough
          bases fermented for 48 hours. Order now for fast, direct thermal-bag delivery.
        </Text>
        <div className="hero__actions">
          <Button variant="primary" label="Explore Full Menu" icon="arrow-right" to="/menu" />
        </div>
      </div>
      <HeroImage src={heroImage} alt="Wood-fired Margherita pizza" />
    </section>
  )
}
