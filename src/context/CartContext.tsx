import { createContext, useContext, useState, type ReactNode } from 'react'

export type Pizza = {
  id: string
  name: string
  price: string
  image: string
}

export type CartLineItem = Pizza & { lineId: string }

type CartContextValue = {
  lineItems: CartLineItem[]
  addItem: (pizza: Pizza) => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [lineItems, setLineItems] = useState<CartLineItem[]>([])

  function addItem(pizza: Pizza) {
    setLineItems((items) => [...items, { ...pizza, lineId: crypto.randomUUID() }])
  }

  return (
    <CartContext.Provider value={{ lineItems, addItem }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
