import './FooterColumn.css'

type FooterColumnProps = {
  title: string
  rows: string[][]
}

export default function FooterColumn({ title, rows }: FooterColumnProps) {
  return (
    <div className="footer-column">
      <h3 className="footer-column__title">{title}</h3>
      <div className="footer-column__rows">
        {rows.map((row) => (
          <div key={row.join('-')} className="footer-column__row">
            {row.map((line) => (
              <p key={line} className="footer-column__line">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
