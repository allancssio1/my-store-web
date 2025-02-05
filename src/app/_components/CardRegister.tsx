'use client'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { RegisterFormDataProps } from '../interfaces'
import { FormRegister } from './FormRegister'

export const CardRegister = ({ onSubmit }: RegisterFormDataProps) => {
  return (
    <Card className="flex flex-col justify-center items-center text-center max-w-[500px] w-full mx-2 border-primary">
      <CardHeader className="mb-3">
        <CardTitle className="text-3xl">Criar conta</CardTitle>
      </CardHeader>
      <CardContent>
        <FormRegister onSubmit={onSubmit} />
      </CardContent>
    </Card>
  )
}
