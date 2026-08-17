import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Hero from './Hero'

function renderHero() {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/menu" element={<div>Menu Page Marker</div>} />
      </Routes>
    </MemoryRouter>,
  )
}

describe('Hero', () => {
  it('renders headline, subheadline, and the primary CTA', () => {
    renderHero()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Wood-Fired Pizza,')
    expect(heading).toHaveTextContent('Delivered Hot')
    expect(
      screen.getByText(/Baked at 900°F in our stone ovens/i),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Explore Full Menu/i })).toBeInTheDocument()
  })

  it('navigates to the menu page when Explore Full Menu is clicked', async () => {
    const user = userEvent.setup()
    renderHero()
    await user.click(screen.getByRole('link', { name: /Explore Full Menu/i }))
    expect(screen.getByText('Menu Page Marker')).toBeInTheDocument()
  })
})
