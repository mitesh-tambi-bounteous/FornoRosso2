import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders hours, location, and contact info', () => {
    render(<Footer />)

    expect(screen.getByText('Kitchen Hours')).toBeInTheDocument()
    expect(screen.getByText('Monday - Thursday')).toBeInTheDocument()
    expect(screen.getByText('12:00 PM - 10:00 PM')).toBeInTheDocument()
    expect(screen.getByText('Friday - Saturday')).toBeInTheDocument()
    expect(screen.getByText('12:00 PM - 11:30 PM')).toBeInTheDocument()
    expect(screen.getByText('Sunday')).toBeInTheDocument()
    expect(screen.getByText('1:00 PM - 9:30 PM')).toBeInTheDocument()

    expect(screen.getByText('Pizzeria Location')).toBeInTheDocument()
    expect(
      screen.getByText('842 Rione Monti, Sourdough Avenue, Suite 100'),
    ).toBeInTheDocument()
    expect(screen.getByText('Delivery: (555) 392-7677')).toBeInTheDocument()
    expect(screen.getByText('Email: ciao@fornorosso.pizza')).toBeInTheDocument()

    expect(
      screen.getByText(/Artisanal wood-fired sourdough pizzas crafted/i),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()

    expect(
      screen.getByText('© 2026 Forno Rosso Pizzeria. All rights reserved.'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Delivery Terms' })).toBeInTheDocument()
  })
})
