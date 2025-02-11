import { type LucideIcon } from 'lucide-react'

import { Collapsible, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

interface Props {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
  }
  setRoute: (route: string) => void
  route: string
}

export function NavMain({ items, setRoute, route }: Props) {
  return (
    <SidebarGroup onClick={() => setRoute(route)}>
      <SidebarMenu>
        <Collapsible key={items.title} asChild className="group/collapsible">
          <SidebarMenuItem
            className={`${
              items.isActive ? 'bg-primary text-secondary' : ''
            } rounded-md`}
          >
            <CollapsibleTrigger
              asChild
              // className="hover:bg-primary/50 hover:text-secondary"
            >
              <SidebarMenuButton
                tooltip={items.title}
                className="hover:bg-primary/50 hover:text-secondary"
              >
                {items.icon && <items.icon />}
                <span>{items.title}</span>
              </SidebarMenuButton>
            </CollapsibleTrigger>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  )
}
