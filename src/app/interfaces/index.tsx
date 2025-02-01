import { StaticImageData } from 'next/image'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: StaticImageData
}

export interface CartItem extends MenuItem {
  quantity: number
}
