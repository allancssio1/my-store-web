'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import dayjs from 'dayjs'

// Mock data for orders
const orders = [
  {
    id: 'ORD001',
    customerName: 'João Silva',
    amount: 150.0,
    createdAt: new Date(2024, 3, 10, 14, 30),
  },
  {
    id: 'ORD002',
    customerName: 'Maria Santos',
    amount: 89.9,
    createdAt: new Date(2024, 3, 10, 15, 45),
  },
  {
    id: 'ORD003',
    customerName: 'Pedro Oliveira',
    amount: 299.99,
    createdAt: new Date(2024, 3, 10, 16, 15),
  },
  {
    id: 'ORD004',
    customerName: 'Ana Pereira',
    amount: 199.5,
    createdAt: new Date(2024, 3, 10, 16, 45),
  },
  {
    id: 'ORD005',
    customerName: 'Carlos Mendes',
    amount: 450.0,
    createdAt: new Date(2024, 3, 10, 17, 0),
  },
  {
    id: 'ORD006',
    customerName: 'Lucia Costa',
    amount: 175.3,
    createdAt: new Date(2024, 3, 10, 17, 15),
  },
  {
    id: 'ORD007',
    customerName: 'Roberto Alves',
    amount: 89.99,
    createdAt: new Date(2024, 3, 10, 17, 30),
  },
]

// Mock data for customers
const customers = [
  {
    id: 'CST001',
    name: 'João Silva',
    deliveredOrders: 15,
  },
  {
    id: 'CST002',
    name: 'Maria Santos',
    deliveredOrders: 8,
  },
  {
    id: 'CST003',
    name: 'Pedro Oliveira',
    deliveredOrders: 23,
  },
  {
    id: 'CST004',
    name: 'Ana Pereira',
    deliveredOrders: 12,
  },
  {
    id: 'CST005',
    name: 'Carlos Mendes',
    deliveredOrders: 18,
  },
  {
    id: 'CST006',
    name: 'Lucia Costa',
    deliveredOrders: 5,
  },
  {
    id: 'CST007',
    name: 'Roberto Alves',
    deliveredOrders: 9,
  },
]

export default function Home() {
  const displayLimit = 5
  const displayedOrders = orders.slice(0, displayLimit)
  const displayedCustomers = customers.slice(0, displayLimit)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* New Orders Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Pedidos Novos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Hora</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {displayedOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customerName}</TableCell>
                      <TableCell>
                        {order.amount.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </TableCell>
                      <TableCell>
                        {dayjs(order.createdAt).format('HH:mm')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-right text-sm text-muted-foreground"
                    >
                      Mostrando {displayedOrders.length} de {orders.length}{' '}
                      pedidos
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </CardContent>
          </Card>

          {/* Customers Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Clientes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Pedidos Entregues</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {displayedCustomers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="font-medium">
                        {customer.id}
                      </TableCell>
                      <TableCell>{customer.name}</TableCell>
                      <TableCell>{customer.deliveredOrders}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell
                      colSpan={3}
                      className="text-right text-sm text-muted-foreground"
                    >
                      Mostrando {displayedCustomers.length} de{' '}
                      {customers.length} clientes
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
