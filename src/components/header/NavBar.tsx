import { NavLink } from 'react-router-dom'
import './NavBar.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/menu', label: 'Our Menu', end: false },
  { to: '/cart', label: 'Cart', end: false },
]

export default function NavBar() {
  return (
    <nav className="nav-bar">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.end}
          className={({ isActive }) =>
            ['nav-link', isActive && 'nav-link--active'].filter(Boolean).join(' ')
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}
