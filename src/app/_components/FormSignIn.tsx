'use client'

import { LoginFormData, LoginFormDataProps } from '../interfaces'
import { useForm } from 'react-hook-form'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const FormSignIn = ({ onSubmit }: LoginFormDataProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>()

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="sm:grid sm:grid-cols-[100px_minmax(300px,_1fr)] gap-2 mb-2 items-center flex flex-col justify-center w-full ">
        <Label>Nome de usuário: </Label>
        <Input
          type="text"
          {...register('username', { required: true })}
          className="border-2 border-primary/30 max-w-72 w-72"
        />
        {errors.username && (
          <span className="text-red-500 text-sm">
            {'Este campo é obrigatório.'}
          </span>
        )}
      </div>
      <div className="sm:grid sm:grid-cols-[100px_minmax(300px,_1fr)] gap-2 mb-2 items-center flex flex-col justify-center w-full ">
        <Label>Senha: </Label>
        <Input
          type="password"
          {...register('password', { required: true })}
          className="border-2 border-primary/30 max-w-72 w-72"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {'Este campo é obrigatório.'}
          </span>
        )}
      </div>
      <Button type="submit" className="my-2">
        Entrar
      </Button>
    </form>
  )
}
