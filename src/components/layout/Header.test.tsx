import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from '../../context/CartContext'
import Header from './Header'

function renderHeader(initialPath = '/') {
  return render(
    <CartProvider>
      <MemoryRouter initialEntries={[initialPath]}>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/menu" element={<div>Menu Page Marker</div>} />
          <Route path="/cart" element={<div>Cart Page Marker</div>} />
        </Routes>
      </MemoryRouter>
    </CartProvider>,
  )
}

describe('Header', () => {
  it('renders Home, Our Menu, and a Cart link', () => {
    renderHeader()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Our Menu' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Cart' })).toBeInTheDocument()
  })

  it('marks Home as active at the root route', () => {
    renderHeader('/')
    expect(screen.getByRole('link', { name: 'Home' })).toHaveClass('nav-link--active')
    expect(screen.getByRole('link', { name: 'Our Menu' })).not.toHaveClass('nav-link--active')
  })

  it('navigates to the menu page when Our Menu is clicked', async () => {
    const user = userEvent.setup()
    renderHeader()
    await user.click(screen.getByRole('link', { name: 'Our Menu' }))
    expect(screen.getByText('Menu Page Marker')).toBeInTheDocument()
  })

  it('navigates to the cart page when the cart icon link is clicked', async () => {
    const user = userEvent.setup()
    renderHeader()
    await user.click(screen.getByRole('link', { name: /shopping cart/i }))
    expect(screen.getByText('Cart Page Marker')).toBeInTheDocument()
  })
})
