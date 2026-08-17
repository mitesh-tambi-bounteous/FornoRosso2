import diavola from '../assets/pizza-diavola.png'
import funghi from '../assets/pizza-funghi.png'
import margherita from '../assets/pizza-margherita.png'
import prosciutto from '../assets/pizza-prosciutto.png'

export type PizzaData = {
  id: string
  name: string
  price: string
  description: string
  image: string
}

export const pizzas: PizzaData[] = [
  {
    id: 'diavola',
    name: 'Diavola',
    price: '$16.50',
    description:
      'Spicy calabrian salami, house-pulled fresh mozzarella, san marzano tomato base, organic chili oil, fresh basil leaves.',
    image: diavola,
  },
  {
    id: 'funghi-selvatici-e-tartufo',
    name: 'Funghi Selvatici & Tartufo',
    price: '$18.00',
    description:
      'Roasted wild porcini and cremini mushrooms, truffle-infused olive oil, white mozzarella base, shaved pecorino.',
    image: funghi,
  },
  {
    id: 'classic-margherita',
    name: 'Classic Margherita',
    price: '$14.50',
    description:
      'Imported San Marzano tomato sauce, fresh buffalo mozzarella, fragrant fresh basil, extra virgin olive oil.',
    image: margherita,
  },
  {
    id: 'prosciutto-crudo-e-rucola',
    name: 'Prosciutto Crudo e Rucola',
    price: '$19.00',
    description:
      'Prosciutto di Parma cured ham, fresh peppery wild arugula, shaved parmigiano-reggiano, balsamic glaze reduction.',
    image: prosciutto,
  },
]
