import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { FormSignIn } from './FormSignIn'
import { LoginFormDataProps } from '../interfaces'

export const CardSignIn = ({
  onSubmit,
  alterStateCard,
}: LoginFormDataProps) => {
  return (
    <Card className="flex flex-col justify-center items-center text-center max-w-[500px] w-full mx-2 border-primary">
      <CardHeader className="mb-3">
        <CardTitle className="text-3xl">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <FormSignIn onSubmit={onSubmit} alterStateCard={alterStateCard} />
      </CardContent>
    </Card>
  )
}
