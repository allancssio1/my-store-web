import {
  grilledSalmon,
  caesarSalad,
  chocolateFondant,
  frenchOnionSoup,
  mushroomRisotto,
} from '../_images/index'
import { MenuItem } from '../interfaces'

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon with herbs and lemon butter sauce',
    price: 28,
    image: grilledSalmon,
  },
  {
    id: '3',
    name: 'Mushroom Risotto',
    description: 'Creamy Arborio rice with wild mushrooms and parmesan',
    price: 24,
    image: mushroomRisotto,
  },
  {
    id: '4',
    name: 'Caesar Salad',
    description: 'Crisp romaine, garlic croutons, parmesan',
    price: 12,
    image: caesarSalad,
  },
  {
    id: '5',
    name: 'French Onion Soup',
    description: 'Classic soup with melted gruyere',
    price: 10,
    image: frenchOnionSoup,
  },
  {
    id: '6',
    name: 'Chocolate Fondant',
    description: 'Warm chocolate cake with vanilla ice cream',
    price: 11,
    image: chocolateFondant,
  },
]
