'use client'

import {
  Plus,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Upload,
} from 'lucide-react'
import { Product } from '@/app/interfaces/index'
import { useState } from 'react'
import Image from 'next/image'
import {
  grilledSalmon,
  caesarSalad,
  chocolateFondant,
  mushroomRisotto,
  frenchOnionSoup,
} from '@/app/_images'
import { ModalProduct } from './_components/ModalProduct'
import { Input } from '@/components/ui/input'

const mockProducts: Product[] = [
  {
    id: 1,
    image: grilledSalmon,
    title: 'Headphones Pro',
    description:
      'Premium wireless headphones with noise cancellation and high-quality audio for the best listening experience.',
    quantity: 15,
    originalPrice: 299.99,
    currentPrice: 249.99,
  },
  {
    id: 2,
    image: caesarSalad,
    title: 'Smart Watch X',
    description: 'Advanced smartwatch with health tracking and notifications.',
    quantity: 8,
    originalPrice: 199.99,
    currentPrice: 179.99,
  },
  {
    id: 3,
    image: chocolateFondant,
    title: 'Wireless Earbuds',
    description: 'True wireless earbuds with premium sound quality.',
    quantity: 12,
    originalPrice: 159.99,
    currentPrice: 129.99,
  },
  {
    id: 4,
    image: mushroomRisotto,
    title: 'Smart Speaker',
    description: 'Voice-controlled smart speaker with premium sound.',
    quantity: 20,
    originalPrice: 199.99,
    currentPrice: 149.99,
  },
  {
    id: 5,
    image: frenchOnionSoup,
    title: 'Gaming Mouse',
    description: 'High-precision gaming mouse with RGB lighting.',
    quantity: 25,
    originalPrice: 79.99,
    currentPrice: 59.99,
  },
  {
    id: 6,
    image: grilledSalmon,
    title: 'Mechanical Keyboard',
    description: 'RGB mechanical keyboard with custom switches.',
    quantity: 18,
    originalPrice: 149.99,
    currentPrice: 129.99,
  },
  {
    id: 7,
    image: chocolateFondant,
    title: 'Gaming Headset',
    description: 'Surround sound gaming headset with noise cancellation.',
    quantity: 15,
    originalPrice: 189.99,
    currentPrice: 159.99,
  },
  {
    id: 8,
    image: chocolateFondant,
    title: 'Laptop Pro',
    description: 'High-performance laptop for professionals.',
    quantity: 10,
    originalPrice: 1999.99,
    currentPrice: 1799.99,
  },
]

const ITEMS_PER_PAGE = 6

function formatPrice(price: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)
}

function truncateText(text: string, limit: number): string {
  if (text.length <= limit) return text
  return text.slice(0, limit) + '...'
}

export default function ProductPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [isOpen, setIsOpen] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const totalPages = Math.ceil(mockProducts.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentProducts = mockProducts.slice(startIndex, endIndex)

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const handleSubmit = () => {}

  const handleImageUpload = () => {}

  const handleDelete = () => {}

  const addProduct = (isEditing?: boolean, product?: Product) => {
    return (
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Título
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={product?.title}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Descrição
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={product?.description}
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            URL da Imagem
          </label>
          <div className="space-y-2">
            <Input
              type="url"
              id="image"
              name="image"
              value={typeof product?.image === 'string' ? product?.image : ''}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 cursor-not-allowed"
            />
            <div className="flex items-center gap-2">
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <label
                htmlFor="imageUpload"
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md cursor-pointer transition-colors
                    ${
                      isUploading
                        ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
              >
                <Upload size={16} />
                {isUploading ? 'Enviando...' : 'Upload de Imagem'}
              </label>
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt="Preview"
                  className="h-10 w-10 object-cover rounded"
                  width={40}
                  height={40}
                />
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantidade
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              defaultValue={product?.quantity}
              required
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="originalPrice"
              className="block text-sm font-medium text-gray-700"
            >
              Preço Original
            </label>
            <input
              type="number"
              id="originalPrice"
              name="originalPrice"
              defaultValue={product?.originalPrice}
              required
              min="0"
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="currentPrice"
              className="block text-sm font-medium text-gray-700"
            >
              Preço Atual
            </label>
            <input
              type="number"
              id="currentPrice"
              name="currentPrice"
              defaultValue={product?.currentPrice}
              required
              min="0"
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          {isEditing ? (
            <>
              <button
                type="button"
                onClick={handleDelete}
                className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors"
              >
                Excluir
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              >
                Atualizar
              </button>
            </>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
              Salvar
            </button>
          )}
        </div>
      </form>
    )
  }

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
          Produtos
        </h1>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg flex items-center gap-2 transition-colors text-sm sm:text-base"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Plus size={20} />
          <span className="hidden sm:inline">Novo Produto</span>
        </button>
      </div>

      {/* Desktop Table View */}
      <div className="hidden sm:block overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Produto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantidade
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Preço Original
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Preço Atual
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentProducts &&
              currentProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-16 w-16 flex-shrink-0">
                        <Image
                          className="h-16 w-16 rounded-lg object-cover"
                          width={120}
                          height={120}
                          src={product.image}
                          alt={product.title}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {product.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {truncateText(product.description, 50)}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {product.quantity} unid.
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-green-600">
                      {formatPrice(product.currentPrice)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() =>
                        alert(`Ver detalhes do produto ${product.id}`)
                      }
                      className="text-blue-600 hover:text-blue-900 flex items-center gap-1"
                    >
                      Detalhes
                      <ArrowRight size={16} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="grid grid-cols-1 gap-4 sm:hidden">
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex items-start space-x-4">
              <Image
                className="h-24 w-24 rounded-lg object-cover"
                src={product.image}
                alt={product.title}
              />
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-medium text-gray-900">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {truncateText(product.description, 50)}
                </p>
                <div className="mt-2 flex items-center">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {product.quantity} unid.
                  </span>
                </div>
                <div className="mt-2 space-y-1">
                  <p className="text-sm text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </p>
                  <p className="text-lg font-medium text-green-600">
                    {formatPrice(product.currentPrice)}
                  </p>
                </div>
                <button
                  onClick={() => alert(`Ver detalhes do produto ${product.id}`)}
                  className="mt-3 w-full bg-blue-50 text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  Detalhes
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-center gap-4 bg-white p-4 rounded-lg shadow">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
            Anterior
          </button>
          <span className="text-sm text-gray-700">
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Próxima
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      <ModalProduct isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        {addProduct()}
      </ModalProduct>
    </div>
  )
}
