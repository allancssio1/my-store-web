import { SignIn } from '@/app/_components/CardLogin'
import { Register } from '@/app/_components/CardRegister'

export default function Auth() {
  return (
    <main className="flex items-center justify-center h-screen ">
      {/* <SignIn title="Login" /> */}
      <Register title="Cadastro" />
    </main>
  )
}
