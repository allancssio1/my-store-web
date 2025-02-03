import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { InputForm } from './InputForm'
import { registerForm } from '@/app/_constants/form'

export const Register = () => {
  return (
    <Card className="flex flex-col justify-center items-center text-center max-w-[500px] w-full mx-2 border-primary">
      <CardHeader className="mb-3">
        <CardTitle className="text-3xl">Cadastro</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center gap-2 p-3 ">
        {registerForm.map((input, index) => (
          <InputForm
            key={index}
            label={input.label}
            placeholder={input.placeholder}
            type={input.type}
            classNameString={input.classNameString}
          />
        ))}
      </CardContent>
      <CardFooter>
        <Button>Entrar</Button>
      </CardFooter>
    </Card>
  )
}
