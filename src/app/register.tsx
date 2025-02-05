'use client'
import { CardRegister } from '@/app/_components/CardRegister'
import { RegisterFormData } from '@/app/interfaces'

export default function Register() {
  const regiser = async (data: RegisterFormData) => {
    console.log('🚀 ~ Auth ~ data:', data)
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen ">
      <CardRegister onSubmit={regiser} />
    </main>
  )
}
