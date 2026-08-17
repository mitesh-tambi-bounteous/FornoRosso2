import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CartProvider, useCart } from '../../context/CartContext'
import FeaturedPizzas from './FeaturedPizzas'

function CartObserver() {
  const { lineItems } = useCart()
  return <div data-testid="line-item-count">{lineItems.length}</div>
}

function renderFeaturedPizzas() {
  return render(
    <CartProvider>
      <FeaturedPizzas />
      <CartObserver />
    </CartProvider>,
  )
}

describe('FeaturedPizzas', () => {
  it('renders exactly 4 pizza cards with name, image, price, and Add to Cart button', () => {
    renderFeaturedPizzas()
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(4)

    const expected = [
      { name: 'Diavola', price: '$16.50' },
      { name: 'Funghi Selvatici & Tartufo', price: '$18.00' },
      { name: 'Classic Margherita', price: '$14.50' },
      { name: 'Prosciutto Crudo e Rucola', price: '$19.00' },
    ]

    cards.forEach((card, i) => {
      const utils = within(card)
      expect(utils.getByText(expected[i].name)).toBeInTheDocument()
      expect(utils.getByText(expected[i].price)).toBeInTheDocument()
      expect(utils.getByRole('img', { name: expected[i].name })).toBeInTheDocument()
      expect(utils.getByRole('button', { name: /Add to Cart/i })).toBeInTheDocument()
    })
  })

  it('truncates long pizza names with an ellipsis class', () => {
    renderFeaturedPizzas()
    const funghiName = screen.getByText('Funghi Selvatici & Tartufo')
    const prosciuttoName = screen.getByText('Prosciutto Crudo e Rucola')
    expect(funghiName.className).toMatch(/truncate/)
    expect(prosciuttoName.className).toMatch(/truncate/)
  })

  it('increments the same line item quantity when Add to Cart is clicked twice, and adds a new line item for a different pizza', async () => {
    const user = userEvent.setup()
    renderFeaturedPizzas()
    const cards = screen.getAllByRole('article')
    const diavolaButton = within(cards[0]).getByRole('button', { name: /Add to Cart/i })
    const funghiButton = within(cards[1]).getByRole('button', { name: /Add to Cart/i })

    await user.click(diavolaButton)
    expect(screen.getByTestId('line-item-count')).toHaveTextContent('1')

    await user.click(diavolaButton)
    expect(screen.getByTestId('line-item-count')).toHaveTextContent('1')

    await user.click(funghiButton)
    expect(screen.getByTestId('line-item-count')).toHaveTextContent('2')
  })
})
