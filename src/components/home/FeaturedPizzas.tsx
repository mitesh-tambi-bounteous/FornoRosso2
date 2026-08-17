import SectionHeading from '../common/SectionHeading'
import PizzaCard from './PizzaCard'
import { pizzas } from '../../data/pizzas'
import './FeaturedPizzas.css'

const featuredPizzaIds = ['diavola', 'funghi-selvatici-e-tartufo', 'classic-margherita', 'prosciutto-crudo-e-rucola']
const featuredPizzas = pizzas.filter((pizza) => featuredPizzaIds.includes(pizza.id))

export default function FeaturedPizzas() {
  return (
    <section className="featured-pizzas">
      <SectionHeading eyebrow="Chef Recommendations" title="Popular Sourdough Pizzas" divider />
      <div className="featured-pizzas__grid">
        {featuredPizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </section>
  )
}
