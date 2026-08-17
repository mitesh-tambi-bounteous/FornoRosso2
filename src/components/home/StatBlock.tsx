import './StatBlock.css'

type StatBlockProps = {
  label: string
  value: string
}

export default function StatBlock({ label, value }: StatBlockProps) {
  return (
    <div className="stat-block">
      <p className="stat-block__label">{label}</p>
      <p className="stat-block__value">{value}</p>
    </div>
  )
}
