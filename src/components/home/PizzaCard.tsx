import Button from '../common/Button'
import { useCart } from '../../context/CartContext'
import type { MenuItemData } from '../../data/pizzas'
import './PizzaCard.css'

type PizzaCardProps = {
  pizza: MenuItemData
}

export default function PizzaCard({ pizza }: PizzaCardProps) {
  const { addItem } = useCart()

  return (
    <article className="pizza-card">
      <img className="pizza-card__image" src={pizza.image} alt={pizza.name} />
      <div className="pizza-card__body">
        <div className="pizza-card__header">
          <h3 className="pizza-card__name truncate">{pizza.name}</h3>
          <span className="pizza-card__price">{pizza.price}</span>
        </div>
        <span className="pizza-card__category">{pizza.category}</span>
        <p className="pizza-card__description">{pizza.description}</p>
        <Button
          variant="dark"
          label="Add to Cart"
          icon="plus"
          iconPosition="leading"
          onClick={() => addItem(pizza)}
          className="pizza-card__button"
        />
      </div>
    </article>
  )
}
