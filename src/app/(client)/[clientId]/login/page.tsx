'use client'
import { LoginFormData } from '../../../interfaces'
import { CardSignIn } from '../../../_components/CardSignIn'

export default function SigIn() {
  const login = async (data: LoginFormData) => {
    console.log('🚀 ~ Auth ~ data:', data)
  }

  return (
    <main className="flex  flex-col items-center justify-center h-screen ">
      <CardSignIn onSubmit={login} />
    </main>
  )
}
