import { Bot, GalleryVerticalEnd, Settings2, House } from 'lucide-react'

export const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
  ],
  navMain: [
    {
      title: 'Home',
      url: '/dashboard',
      icon: House,
    },
    {
      title: 'Clients',
      url: '/clients',
      icon: Bot,
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: Settings2,
    },
  ],
}
