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

export interface PaymentFormData {
  nome: string
  email: string
  telefone: string
  endereco: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  estado: string
  cep: string
  metodoPagamento: 'dinheiro' | 'pix' | 'credito' | 'debito'
  troco?: string
}
export interface Product {
  id: number
  image: StaticImageData | string
  title: string
  description: string
  quantity: number
  originalPrice: number
  currentPrice: number
}

export interface FormPaymentProps {
  onSubmit: (data: PaymentFormData) => void
  total: number
}

export interface LoginFormData {
  username: string
  password: string
}

export interface RegisterFormData {
  company: string
  username: string
  password: string
  confirmPassword: string
  cnpj: string
}

export interface LoginFormDataProps {
  onSubmit: (data: LoginFormData) => Promise<void>
}
export interface RegisterFormDataProps {
  onSubmit: (data: RegisterFormData) => Promise<void>
}
