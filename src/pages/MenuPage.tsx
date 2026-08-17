import { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PageIntro from '../components/menu/PageIntro'
import CategoryFilterBar, { type CategoryFilterId } from '../components/menu/CategoryFilterBar'
import MenuGrid from '../components/menu/MenuGrid'
import { pizzas } from '../data/pizzas'

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilterId>('all')

  const visibleItems =
    activeCategory === 'all' ? pizzas : pizzas.filter((pizza) => pizza.category === activeCategory)

  return (
    <main>
      <Header />
      <PageIntro />
      <CategoryFilterBar active={activeCategory} onChange={setActiveCategory} />
      <MenuGrid items={visibleItems} />
      <Footer />
    </main>
  )
}
