import Header from '../components/layout/Header'
import Hero from '../components/home/Hero'
import DeliveryBanner from '../components/home/DeliveryBanner'
import FeaturedPizzas from '../components/home/FeaturedPizzas'
import BrandStory from '../components/home/BrandStory'
import Footer from '../components/layout/Footer'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <DeliveryBanner />
      <FeaturedPizzas />
      <BrandStory />
      <Footer />
    </main>
  )
}
