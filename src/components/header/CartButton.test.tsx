import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { CartProvider, useCart, type Pizza } from '../../context/CartContext'
import Header from '../layout/Header'

const pizzaA: Pizza = { id: 'pizza-a', name: 'Pizza A', price: '$10.00', image: 'a.png' }
const pizzaB: Pizza = { id: 'pizza-b', name: 'Pizza B', price: '$12.00', image: 'b.png' }

function AddButtons() {
  const { addItem } = useCart()
  return (
    <div>
      <button onClick={() => addItem(pizzaA)}>Add A</button>
      <button onClick={() => addItem(pizzaB)}>Add B</button>
    </div>
  )
}

function renderHeaderWithControls() {
  return render(
    <CartProvider>
      <MemoryRouter>
        <Header />
        <AddButtons />
      </MemoryRouter>
    </CartProvider>,
  )
}

describe('CartButton badge', () => {
  it('increments the badge by 1 when a new item is added, and leaves it unchanged when the same item is added again', async () => {
    const user = userEvent.setup()
    renderHeaderWithControls()
    const cartLink = screen.getByRole('link', { name: /shopping cart/i })

    await user.click(screen.getByText('Add A'))
    expect(cartLink).toHaveTextContent('1')

    await user.click(screen.getByText('Add A'))
    expect(cartLink).toHaveTextContent('1')

    await user.click(screen.getByText('Add B'))
    expect(cartLink).toHaveTextContent('2')
  })
})
