import Divider from '../common/Divider'
import FooterBrand from '../footer/FooterBrand'
import FooterColumn from '../footer/FooterColumn'
import FooterBottom from '../footer/FooterBottom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <FooterBrand />
        <FooterColumn
          title="Kitchen Hours"
          rows={[
            ['Monday - Thursday', '12:00 PM - 10:00 PM'],
            ['Friday - Saturday', '12:00 PM - 11:30 PM'],
            ['Sunday', '1:00 PM - 9:30 PM'],
          ]}
        />
        <FooterColumn
          title="Pizzeria Location"
          rows={[
            ['842 Rione Monti, Sourdough Avenue, Suite 100'],
            ['Delivery: (555) 392-7677'],
            ['Email: ciao@fornorosso.pizza'],
          ]}
        />
      </div>
      <Divider />
      <FooterBottom />
    </footer>
  )
}
