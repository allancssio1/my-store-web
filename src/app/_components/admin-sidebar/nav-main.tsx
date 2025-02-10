'use client'

import { House, PersonStanding } from 'lucide-react'

import { Collapsible } from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { usePathname, useRouter } from 'next/navigation'

export function NavMain() {
  const routeName = usePathname()
  const route = useRouter()

  const bgPrimary = 'bg-primary text-secondary'

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Opções</SidebarGroupLabel>
      <SidebarMenu>
        <Collapsible asChild className={`group/collapsible `}>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={'Dashboard'}
              className={`${
                routeName === '/dashboard' ? bgPrimary : ''
              } hover:bg-primary/50 hover:text-secondary`}
              onClick={() => {
                route.push('/dashboard')
              }}
            >
              <House />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </Collapsible>

        <Collapsible asChild className={`group/collapsible `}>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={'Clientes'}
              className={`${
                routeName === '/clients' ? bgPrimary : ''
              } hover:bg-primary/50 hover:text-secondary`}
              onClick={() => {
                route.push('/clients')
              }}
            >
              <PersonStanding />
              <span>Clientes</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  )
}
