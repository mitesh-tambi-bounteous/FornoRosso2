import diavola from '../assets/pizza-diavola.png'
import funghi from '../assets/pizza-funghi.png'
import margherita from '../assets/pizza-margherita.png'
import prosciutto from '../assets/pizza-prosciutto.png'
import quattroFormaggi from '../assets/pizza-quattro-formaggi.png'
import verdureGrigliate from '../assets/pizza-verdure-grigliate.png'
import calzoneRosso from '../assets/pizza-calzone-rosso.png'
import focaccia from '../assets/pizza-focaccia.png'
import tiramisu from '../assets/pizza-tiramisu.png'

export type MenuCategory = 'Classic' | 'Specialty' | 'Vegetarian' | 'Sides & Drinks'

export type MenuItemData = {
  id: string
  name: string
  price: string
  description: string
  image: string
  category: MenuCategory
}

export const pizzas: MenuItemData[] = [
  {
    id: 'diavola',
    name: 'Diavola',
    price: '$16.50',
    description:
      'Spicy calabrian salami, house-pulled fresh mozzarella, san marzano tomato base, organic chili oil, fresh basil leaves.',
    image: diavola,
    category: 'Specialty',
  },
  {
    id: 'funghi-selvatici-e-tartufo',
    name: 'Funghi Selvatici & Tartufo',
    price: '$18.00',
    description:
      'Roasted wild porcini and cremini mushrooms, truffle-infused olive oil, white mozzarella base, shaved pecorino.',
    image: funghi,
    category: 'Specialty',
  },
  {
    id: 'classic-margherita',
    name: 'Classic Margherita',
    price: '$14.50',
    description:
      'Imported San Marzano tomato sauce, fresh buffalo mozzarella, fragrant fresh basil, extra virgin olive oil.',
    image: margherita,
    category: 'Classic',
  },
  {
    id: 'prosciutto-crudo-e-rucola',
    name: 'Prosciutto Crudo e Rucola',
    price: '$19.00',
    description:
      'Prosciutto di Parma cured ham, fresh peppery wild arugula, shaved parmigiano-reggiano, balsamic glaze reduction.',
    image: prosciutto,
    category: 'Specialty',
  },
  {
    id: 'quattro-formaggi',
    name: 'Quattro Formaggi',
    price: '$16.00',
    description:
      'Buffalo mozzarella, gorgonzola dolce, fresh ricotta, aged parmigiano-reggiano.',
    image: quattroFormaggi,
    category: 'Classic',
  },
  {
    id: 'verdure-grigliate',
    name: 'Verdure Grigliate',
    price: '$15.00',
    description:
      'Grilled bell peppers, eggplant, roasted zucchini, marinated cherry tomatoes, herb pesto.',
    image: verdureGrigliate,
    category: 'Vegetarian',
  },
  {
    id: 'calzone-rosso',
    name: 'Calzone Rosso',
    price: '$17.00',
    description:
      'Folded sourdough stuffed with ricotta, spicy salami, crushed tomatoes, fresh mozzarella.',
    image: calzoneRosso,
    category: 'Classic',
  },
  {
    id: 'rosemary-garlic-focaccia',
    name: 'Rosemary Garlic Focaccia',
    price: '$8.50',
    description:
      'Fresh baked warm sourdough focaccia, woodfired rosemary, garlic salt, olive oil.',
    image: focaccia,
    category: 'Sides & Drinks',
  },
  {
    id: 'tiramisu-della-casa',
    name: 'Tiramisu della Casa',
    price: '$9.00',
    description:
      'Traditional espresso-soaked ladyfingers, whipped farm mascarpone, pure cocoa dust.',
    image: tiramisu,
    category: 'Sides & Drinks',
  },
]
