import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { CartProvider } from '../context/CartContext'
import HomePage from './HomePage'

function renderHomePage() {
  return render(
    <CartProvider>
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    </CartProvider>,
  )
}

describe('HomePage', () => {
  it('renders all sections in the approved order', () => {
    renderHomePage()

    const landmarks = [
      screen.getByRole('banner'),
      screen.getByRole('heading', { level: 1 }),
      screen.getByText('Free Delivery On Orders Over $35'),
      screen.getByText('Popular Sourdough Pizzas'),
      screen.getByText('Our Passion for the Perfect Crust'),
      screen.getByRole('contentinfo'),
    ]

    let previousPosition = -1
    landmarks.forEach((el) => {
      const position = Array.from(document.body.querySelectorAll('*')).indexOf(el)
      expect(position).toBeGreaterThan(previousPosition)
      previousPosition = position
    })
  })
})
