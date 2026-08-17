import Heading from '../common/Heading'
import Text from '../common/Text'
import './PageIntro.css'

export default function PageIntro() {
  return (
    <div className="page-intro">
      <Heading level={1} text="Browse Our Oven Menu" />
      <Text color="muted">
        Every order is fired individually and packed inside heated thermal backpacks to guarantee
        your pizza arrives fresh.
      </Text>
    </div>
  )
}
