import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import DeliveryBanner from './DeliveryBanner'

describe('DeliveryBanner', () => {
  it('renders the delivery-fee and ETA information', () => {
    render(<DeliveryBanner />)
    expect(screen.getByText('Free Delivery On Orders Over $35')).toBeInTheDocument()
    expect(
      screen.getByText(/Craving quality\? Skip the delivery fee entirely/i),
    ).toBeInTheDocument()
    expect(screen.getByText('Average ETA')).toBeInTheDocument()
    expect(screen.getByText('25 - 35 Min')).toBeInTheDocument()
    expect(screen.getByText('Pizza Temperature')).toBeInTheDocument()
    expect(screen.getByText('Piping Hot Guaranteed')).toBeInTheDocument()
  })
})
