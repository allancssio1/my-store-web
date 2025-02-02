'use client'
import { menuItems } from '@/app/_constants/products'
import { CartItem, MenuItem } from '@/app/interfaces'
import Image from 'next/image'
import {
  ChefHat,
  Clock,
  Phone,
  MapPin,
  UtensilsCrossed,
  Plus,
  Minus,
  ShoppingCart,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function Menu() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { client } = useParams()
  const router = useRouter()

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems')
    const cartTotal = localStorage.getItem('cartTotal')

    if (cartItems && cartTotal) {
      setCart(JSON.parse(cartItems))
    }
  }, [])

  const addToCart = (item: MenuItem) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.id === item.id,
      )
      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        )
      }
      return [...currentCart, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (itemId: string) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === itemId)
      if (existingItem?.quantity === 1) {
        return currentCart.filter((item) => item.id !== itemId)
      }
      return currentCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item,
      )
    })
  }

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  const limitText = (text: string, limit: number = 70) => {
    if (text.length <= limit) {
      return text
    }
    return text.substring(0, limit) + '...'
  }

  const goPayment = () => {
    localStorage.setItem('cartItems', JSON.stringify(cart))
    localStorage.setItem('cartTotal', cartTotal.toString())
    router.push(`/${client}/payment`)
  }

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {/* Hero Section */}
      <div className="h-[60vh] bg-cover bg-center relative bg-[url(/public/images/counter.png)]">
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <ChefHat className="w-16 h-16 mb-6" />
            <h1 className="text-5xl font-bold mb-4">La Maison</h1>
            <p className="text-xl italic">Fine French Cuisine</p>
          </div>
        </div>
      </div>

      {/* Info Bar */}
      <div className="bg-[#2c3e50] text-white py-6">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Open: Tue-Sun 5:30 PM - 10:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>123 Gourmet Street, Culinary City</span>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="container mx-auto px-4 py-16 relative">
        {/* Cart Button */}
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="fixed top-4 right-4 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-[#34495e] transition-colors"
        >
          <ShoppingCart className="w-6 h-6" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </button>

        {/* Cart Sidebar */}
        <div
          className={`fixed right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Your Order</h3>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center"
                    >
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          ${item.price} × {item.quantity}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold">
                      {cartTotal.toLocaleString('pt-Br', {
                        currency: 'BRL',
                        style: 'currency',
                      })}
                    </span>
                  </div>
                  <button
                    onClick={() => goPayment()}
                    className="w-full bg-primary text-white py-2 rounded-lg hover:bg-[#34495e] transition-colors"
                  >
                    Place Order
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="text-center mb-12">
          <UtensilsCrossed className="w-12 h-12 mx-auto mb-4 text-pribg-primary" />
          <h2 className="text-4xl font-bold text-pribg-primary mb-4">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item: MenuItem) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-pribg-primary">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mt-1 max-h-12 h-12 overflow-hidden">
                      {limitText(item.description)}
                    </p>
                  </div>
                  <span className="text-xl font-semibold text-pribg-primary">
                    {item.price.toLocaleString('pt-Br', {
                      currency: 'BRL',
                      style: 'currency',
                    })}
                  </span>
                </div>
                <button
                  onClick={() => addToCart(item)}
                  className="w-full bg-primary text-white py-2 rounded-lg hover:bg-[#34495e] transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 La Maison. All rights reserved.</p>
          <p className="text-sm">
            For reservations, please call (555) 123-4567
          </p>
        </div>
      </footer>
    </div>
  )
}
