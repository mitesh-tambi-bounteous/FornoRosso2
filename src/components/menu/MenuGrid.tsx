import PizzaCard from '../home/PizzaCard'
import type { MenuItemData } from '../../data/pizzas'
import './MenuGrid.css'

type MenuGridProps = {
  items: MenuItemData[]
}

export default function MenuGrid({ items }: MenuGridProps) {
  return (
    <div className="menu-grid">
      {items.map((item) => (
        <PizzaCard key={item.id} pizza={item} />
      ))}
    </div>
  )
}
