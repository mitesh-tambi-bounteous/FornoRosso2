import SectionHeading from '../common/SectionHeading'
import Text from '../common/Text'
import FeatureListItem from './FeatureListItem'
import ImageCollage from './ImageCollage'
import doughImage from '../../assets/story-dough.png'
import ovenImage from '../../assets/story-oven.png'
import './BrandStory.css'

export default function BrandStory() {
  return (
    <section className="brand-story">
      <div className="brand-story__content">
        <SectionHeading
          eyebrow="The Sourdough Secret"
          title="Our Passion for the Perfect Crust"
          align="left"
          eyebrowColor="accent-green"
        />
        <Text color="muted">
          At Forno Rosso, we respect the traditions of Neapolitan pizzaiolos while implementing
          modern techniques. We ferment our proprietary sourdough mother starter for 48 hours.
          This process creates a light, bubbly, and incredibly digestible dough with complex
          flavor profiles.
        </Text>
        <div className="brand-story__features">
          <FeatureListItem
            icon="star"
            title="100% Imported San Marzano Tomatoes"
            body="Sourced directly from fertile Campania volcano soils for a sweet, low-acid base."
          />
          <FeatureListItem
            icon="shield"
            title="Fior di Latte & Fresh Mozzarella"
            body="Hand-stretched daily, creating the classic pool texture that blends beautifully under high fire."
          />
          <FeatureListItem
            icon="compass"
            title="900°F Stone Hearth Wood Oven"
            body="Powered by seasoned hickory and oak to lock in flavors and produce perfect crust blistering in 90 seconds."
          />
        </div>
      </div>
      <ImageCollage
        images={[
          { src: doughImage, alt: 'Baker stretching sourdough by hand' },
          { src: ovenImage, alt: 'Pizza baking in the wood-fired oven' },
        ]}
      />
    </section>
  )
}
