'use client'

import { ComponentProps } from 'react'
import {
  Frame,
  GalleryVerticalEnd,
  House,
  Map,
  PersonStanding,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-react'

import { NavMain } from './nav-main'
import { NavUser } from './nav-user'
import { TeamSwitcher } from './team-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { useParams, usePathname, useRouter } from 'next/navigation'

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: {
    name: 'Acme Inc',
    logo: GalleryVerticalEnd,
    plan: 'Enterprise',
  },

  dashboard: {
    title: 'Dashboard',
    url: '/dashboard',
    icon: House,
    isActive: false,
  },
  clients: {
    title: 'Clients',
    url: '/clients',
    icon: PersonStanding,
    isActive: false,
  },
  settings: {
    title: 'Configurações',
    url: '/settings',
    icon: Settings2,
    isActive: false,
  },
  products: {
    title: 'Produtos',
    url: '/products',
    icon: SquareTerminal,
    isActive: false,
  },
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  const { clientId } = useParams()
  const routes = useRouter()
  const page = usePathname()
    .split('/')
    .filter((x) => x && x !== clientId)[0]

  const goRoute = (route: string) => {
    routes.replace(`/${clientId}/${route}`)
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          items={{ ...data.dashboard, isActive: page === 'dashboard' }}
          setRoute={goRoute}
          route={'dashboard'}
        />
        <NavMain
          items={{ ...data.products, isActive: page === 'products' }}
          setRoute={goRoute}
          route={'products'}
        />
        <NavMain
          items={{ ...data.clients, isActive: page === 'clients' }}
          setRoute={goRoute}
          route={'clients'}
        />
        <NavMain
          items={{ ...data.settings, isActive: page === 'settings' }}
          setRoute={goRoute}
          route={'settings'}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
