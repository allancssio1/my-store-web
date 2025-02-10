'use client'
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ChefHat, ArrowLeft, Truck } from 'lucide-react'
import type { CartItem, PaymentFormData } from '@/app/interfaces'
import { FormPayment } from '@/app/_components/FormPayment'
import { LoadingModal } from '@/app/_components/LoadingModal'

function Payment() {
  const { client } = useParams()
  const router = useRouter()
  const [cart, setCart] = useState<CartItem[]>([])
  const [total, setTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems')
    const cartTotal = localStorage.getItem('cartTotal')

    if (cartItems && cartTotal) {
      setCart(JSON.parse(cartItems))
      setTotal(parseFloat(cartTotal))
    } else {
      router.replace(`/${client}/menu`)
    }
  }, [])

  const handleSubmit = async (data: PaymentFormData) => {
    setIsLoading(true)
    console.log('🚀 ~ Payment ~ data:', data)
    // Aqui você processaria o pagamento
    alert('Pedido realizado com sucesso! Este é um demo.')
    localStorage.removeItem('cartItems')
    localStorage.removeItem('cartTotal')
    setIsLoading(false)
    router.push(`/${client}/menu`)
  }

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <div className="bg-primary text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar ao Menu
            </button>
            <div className="flex items-center gap-3">
              <ChefHat className="w-8 h-8" />
              <span className="text-xl font-bold">La Maison</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Formulário de Entrega e Pagamento */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-6">
                <Truck className="w-6 h-6 text-primabg-primary" />
                <h2 className="text-2xl font-bold text-primabg-primary">
                  Dados de Entrega
                </h2>
              </div>
              <FormPayment onSubmit={handleSubmit} total={total} />
            </div>

            {/* Resumo do Pedido */}
            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <h2 className="text-2xl font-bold text-primabg-primary mb-6">
                Resumo do Pedido
              </h2>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Quantidade: {item.quantity}
                      </p>
                    </div>
                    <span className="font-medium">
                      {(item.price * item.quantity).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg font-bold text-primabg-primary">
                  <span>Total: </span>
                  <span>
                    {total.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoadingModal isOpen={isLoading} />
    </div>
  )
}

export default Payment
