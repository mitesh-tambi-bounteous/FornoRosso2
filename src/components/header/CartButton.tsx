import { Link } from 'react-router-dom'
import Icon from '../common/Icon'
import { useCart } from '../../context/CartContext'
import './CartButton.css'

export default function CartButton() {
  const { lineItems } = useCart()

  return (
    <Link to="/cart" aria-label="Shopping cart" className="cart-button">
      <Icon name="shopping-cart" size={18} />
      <span>{lineItems.length}</span>
    </Link>
  )
}
