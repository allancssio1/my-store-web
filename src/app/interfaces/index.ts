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

export interface FormPaymentProps {
  onSubmit: (data: PaymentFormData) => void
  total: number
}

export interface InputFormProps {
  label?: string
  placeholder?: string
  type?: string
  classNameString?: string
}
