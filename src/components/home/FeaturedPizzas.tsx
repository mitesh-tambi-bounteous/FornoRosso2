import SectionHeading from '../common/SectionHeading'
import PizzaCard from './PizzaCard'
import { pizzas } from '../../data/pizzas'
import './FeaturedPizzas.css'

export default function FeaturedPizzas() {
  return (
    <section className="featured-pizzas">
      <SectionHeading eyebrow="Chef Recommendations" title="Popular Sourdough Pizzas" divider />
      <div className="featured-pizzas__grid">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </section>
  )
}
