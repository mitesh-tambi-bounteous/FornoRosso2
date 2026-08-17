import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { CartProvider } from '../context/CartContext'
import MenuPage from './MenuPage'

function renderMenuPage() {
  return render(
    <CartProvider>
      <MemoryRouter initialEntries={['/menu']}>
        <MenuPage />
      </MemoryRouter>
    </CartProvider>,
  )
}

const allItems = [
  { name: 'Diavola', price: '$16.50' },
  { name: 'Funghi Selvatici & Tartufo', price: '$18.00' },
  { name: 'Classic Margherita', price: '$14.50' },
  { name: 'Prosciutto Crudo e Rucola', price: '$19.00' },
  { name: 'Quattro Formaggi', price: '$16.00' },
  { name: 'Verdure Grigliate', price: '$15.00' },
  { name: 'Calzone Rosso', price: '$17.00' },
  { name: 'Rosemary Garlic Focaccia', price: '$8.50' },
  { name: 'Tiramisu della Casa', price: '$9.00' },
]

describe('MenuPage', () => {
  it('renders a grid of all 9 catalog items with name, image, description, price, and an Add to Cart button', () => {
    renderMenuPage()
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(9)

    cards.forEach((card) => {
      const utils = within(card)
      const name = utils.getByRole('heading', { level: 3 }).textContent
      const expected = allItems.find((item) => item.name === name)
      expect(expected).toBeDefined()
      expect(utils.getByText(expected!.price)).toBeInTheDocument()
      expect(utils.getByRole('img', { name: expected!.name })).toBeInTheDocument()
      expect(utils.getByRole('button', { name: /Add to Cart/i })).toBeInTheDocument()
    })
  })

  it('shows All as the active tab by default with all 9 items visible', () => {
    renderMenuPage()
    const allTab = screen.getByRole('button', { name: 'All' })
    expect(allTab.className).toMatch(/filter-pill--active/)
    expect(screen.getAllByRole('article')).toHaveLength(9)
  })

  it('filters the grid to only the selected category with no navigation, and back to all items when All is clicked again', async () => {
    const user = userEvent.setup()
    renderMenuPage()

    await user.click(screen.getByRole('button', { name: 'Specialty' }))
    let cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)
    expect(screen.getByText('Diavola')).toBeInTheDocument()
    expect(screen.getByText('Funghi Selvatici & Tartufo')).toBeInTheDocument()
    expect(screen.getByText('Prosciutto Crudo e Rucola')).toBeInTheDocument()
    expect(screen.queryByText('Classic Margherita')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Vegetarian' }))
    cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(1)
    expect(screen.getByText('Verdure Grigliate')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getAllByRole('article')).toHaveLength(9)
  })

  it('renders the same header navigation as the home page (Home, Our Menu, cart icon) with Our Menu active', () => {
    renderMenuPage()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    const menuLink = screen.getByRole('link', { name: 'Our Menu' })
    expect(menuLink).toBeInTheDocument()
    expect(menuLink.className).toMatch(/nav-link--active/)
    expect(screen.getByRole('link', { name: /shopping cart/i })).toBeInTheDocument()
  })
})
