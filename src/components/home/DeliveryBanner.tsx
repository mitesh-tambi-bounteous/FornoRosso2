import IconTextBlock from './IconTextBlock'
import StatBlock from './StatBlock'
import './DeliveryBanner.css'

export default function DeliveryBanner() {
  return (
    <section className="delivery-banner">
      <IconTextBlock
        icon="truck"
        title="Free Delivery On Orders Over $35"
        body="Craving quality? Skip the delivery fee entirely inside our active zones."
      />
      <div className="delivery-banner__stats">
        <StatBlock label="Average ETA" value="25 - 35 Min" />
        <StatBlock label="Pizza Temperature" value="Piping Hot Guaranteed" />
      </div>
    </section>
  )
}
