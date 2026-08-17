import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CartProvider, useCart, type Pizza } from './CartContext'

const pizzaA: Pizza = { id: 'pizza-a', name: 'Pizza A', price: '$10.00', image: 'a.png' }
const pizzaB: Pizza = { id: 'pizza-b', name: 'Pizza B', price: '$12.00', image: 'b.png' }

function CartHarness() {
  const { lineItems, addItem } = useCart()
  return (
    <div>
      <button onClick={() => addItem(pizzaA)}>Add A</button>
      <button onClick={() => addItem(pizzaB)}>Add B</button>
      <div data-testid="line-item-count">{lineItems.length}</div>
      {lineItems.map((item) => (
        <div key={item.lineId} data-testid={`quantity-${item.id}`}>
          {item.quantity}
        </div>
      ))}
    </div>
  )
}

function renderHarness() {
  return render(
    <CartProvider>
      <CartHarness />
    </CartProvider>,
  )
}

describe('CartContext', () => {
  it('adds a new line item with quantity 1 when the item is not already in the cart', async () => {
    const user = userEvent.setup()
    renderHarness()

    await user.click(screen.getByText('Add A'))

    expect(screen.getByTestId('line-item-count')).toHaveTextContent('1')
    expect(screen.getByTestId('quantity-pizza-a')).toHaveTextContent('1')
  })

  it('increments quantity instead of adding a new line item when the item is already in the cart', async () => {
    const user = userEvent.setup()
    renderHarness()

    await user.click(screen.getByText('Add A'))
    await user.click(screen.getByText('Add A'))

    expect(screen.getByTestId('line-item-count')).toHaveTextContent('1')
    expect(screen.getByTestId('quantity-pizza-a')).toHaveTextContent('2')
  })

  it('exposes lineItems length as the number of distinct line items, unaffected by quantity', async () => {
    const user = userEvent.setup()
    renderHarness()

    await user.click(screen.getByText('Add A'))
    await user.click(screen.getByText('Add A'))
    await user.click(screen.getByText('Add B'))

    expect(screen.getByTestId('line-item-count')).toHaveTextContent('2')
  })
})
