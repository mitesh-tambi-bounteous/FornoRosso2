import Logo from '../common/Logo'
import NavBar from '../header/NavBar'
import DeliveryEstimateLabel from '../header/DeliveryEstimateLabel'
import CartButton from '../header/CartButton'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <NavBar />
      <div className="header__cart-status">
        <DeliveryEstimateLabel />
        <CartButton />
      </div>
    </header>
  )
}
