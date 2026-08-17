import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import BrandStory from './BrandStory'

describe('BrandStory', () => {
  it('renders the sourdough/oven brand narrative', () => {
    render(<BrandStory />)

    expect(screen.getByText('The Sourdough Secret')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Our Passion for the Perfect Crust' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/we ferment our proprietary sourdough mother starter for 48 hours/i),
    ).toBeInTheDocument()

    expect(screen.getByText('100% Imported San Marzano Tomatoes')).toBeInTheDocument()
    expect(screen.getByText('Fior di Latte & Fresh Mozzarella')).toBeInTheDocument()
    expect(screen.getByText('900°F Stone Hearth Wood Oven')).toBeInTheDocument()

    expect(screen.getByAltText(/dough/i)).toBeInTheDocument()
    expect(screen.getByAltText(/oven/i)).toBeInTheDocument()
  })
})
