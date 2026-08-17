import { createContext, useContext, useState, type ReactNode } from 'react'

export type Pizza = {
  id: string
  name: string
  price: string
  image: string
}

export type CartLineItem = Pizza & { lineId: string; quantity: number }

type CartContextValue = {
  lineItems: CartLineItem[]
  addItem: (pizza: Pizza) => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [lineItems, setLineItems] = useState<CartLineItem[]>([])

  function addItem(pizza: Pizza) {
    setLineItems((items) => {
      const existing = items.find((item) => item.id === pizza.id)
      if (existing) {
        return items.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...items, { ...pizza, lineId: crypto.randomUUID(), quantity: 1 }]
    })
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
