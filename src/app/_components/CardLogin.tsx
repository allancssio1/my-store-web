import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { SignInProps } from '../interfaces'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const SignIn = (props: SignInProps) => {
  return (
    <Card className="flex flex-col justify-center items-center text-center max-w-3xl w-full mx-2 border-primary">
      <CardHeader className="mb-4">
        <CardTitle className="text-2xl">Login</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center gap-4">
        <Label>E-mail</Label>
        <Input className="border-2 border-primary/30 " />
        <Label>Senha</Label>
        <Input className="border-2 border-primary/30 " type="password" />
      </CardContent>
      <CardFooter>
        <Button>Entrar</Button>
      </CardFooter>
    </Card>
  )
}
