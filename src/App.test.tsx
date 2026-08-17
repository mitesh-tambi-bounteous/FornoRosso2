import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import { CartProvider } from './context/CartContext'

describe('App', () => {
  it('mounts without throwing', () => {
    expect(() =>
      render(
        <MemoryRouter>
          <CartProvider>
            <App />
          </CartProvider>
        </MemoryRouter>,
      ),
    ).not.toThrow()
  })
})
