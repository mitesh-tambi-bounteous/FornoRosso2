import type { MenuCategory } from '../../data/pizzas'
import FilterPill from './FilterPill'
import './CategoryFilterBar.css'

export type CategoryFilterId = 'all' | MenuCategory

const categories: { id: CategoryFilterId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'Classic', label: 'Classic' },
  { id: 'Specialty', label: 'Specialty' },
  { id: 'Vegetarian', label: 'Vegetarian' },
  { id: 'Sides & Drinks', label: 'Sides & Drinks' },
]

type CategoryFilterBarProps = {
  active: CategoryFilterId
  onChange: (id: CategoryFilterId) => void
}

export default function CategoryFilterBar({ active, onChange }: CategoryFilterBarProps) {
  return (
    <div className="category-filter-bar">
      {categories.map((category) => (
        <FilterPill
          key={category.id}
          id={category.id}
          label={category.label}
          active={category.id === active}
          onSelect={(id) => onChange(id as CategoryFilterId)}
        />
      ))}
    </div>
  )
}
