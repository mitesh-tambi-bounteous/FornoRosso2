import './FilterPill.css'

type FilterPillProps = {
  id: string
  label: string
  active: boolean
  onSelect: (id: string) => void
}

export default function FilterPill({ id, label, active, onSelect }: FilterPillProps) {
  return (
    <button
      type="button"
      className={['filter-pill', active && 'filter-pill--active'].filter(Boolean).join(' ')}
      onClick={() => onSelect(id)}
    >
      {label}
    </button>
  )
}
