'use client'
import { LoginFormData } from '../../interfaces'
import { CardSignIn } from '../../_components/CardSignIn'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function SigIn() {
  const { client } = useParams()

  const login = async (data: LoginFormData) => {
    console.log('🚀 ~ Auth ~ data:', data)
  }

  return (
    <main className="flex  flex-col items-center justify-center h-screen ">
      <CardSignIn onSubmit={login} />
      <p className="mt-4 text-lg">
        Já tem uma conta?{' '}
        <Link href={`/${client}/register`}>
          <span className="decoration-slice text-primary hover:underline ">
            Criar cadastro
          </span>
        </Link>
      </p>
    </main>
  )
}
