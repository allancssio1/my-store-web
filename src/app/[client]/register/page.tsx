'use client'

import { CardRegister } from '@/app/_components/CardRegister'
import { RegisterFormData } from '@/app/interfaces'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function Register() {
  const { client } = useParams()

  const login = async (data: RegisterFormData) => {
    console.log('🚀 ~ Auth ~ data:', data)
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen ">
      <CardRegister onSubmit={login} />
      <p className="mt-4 text-lg">
        Já tem uma conta?{' '}
        <Link href={`/${client}/login`}>
          <span className="decoration-slice text-primary hover:underline ">
            Entrar
          </span>
        </Link>
      </p>
    </main>
  )
}
