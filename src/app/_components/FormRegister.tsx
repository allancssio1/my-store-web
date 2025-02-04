'use client'

import { RegisterFormData, RegisterFormDataProps } from '../interfaces'
import { useForm } from 'react-hook-form'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { maskCnpj } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export const FormRegister = ({ onSubmit }: RegisterFormDataProps) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormData>()

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="sm:grid sm:grid-cols-[100px_minmax(300px,_1fr)] gap-2 mb-2 items-center flex flex-col justify-center w-full ">
        <Label>Compania:</Label>
        <Input
          type="text"
          {...register('company', { required: true })}
          className="border-2 border-primary/30 max-w-72 w-72"
        />
        {errors.company && (
          <span className="text-red-500 text-sm">
            {'Este campo é obrigatório.'}
          </span>
        )}
      </div>
      <div className="sm:grid sm:grid-cols-[100px_minmax(300px,_1fr)] gap-2 mb-2 items-center flex flex-col justify-center w-full ">
        <Label>CNPJ: </Label>
        <Input
          type="text"
          {...register('cnpj', { required: true })}
          onChange={(e) => {
            const value = maskCnpj(e.target.value)
            setValue('cnpj', value)
          }}
          className="border-2 border-primary/30 max-w-72 w-72"
        />
        {errors.cnpj && (
          <span className="text-red-500 text-sm">
            {'Este campo é obrigatório.'}
          </span>
        )}
      </div>
      <div className="sm:grid sm:grid-cols-[100px_minmax(300px,_1fr)] gap-2 mb-2 items-center flex flex-col justify-center w-full ">
        <Label>Usuário: </Label>
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
        <Label>Senha:</Label>
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
      <div className="sm:grid sm:grid-cols-[100px_minmax(300px,_1fr)] gap-2 mb-2 items-center flex flex-col justify-center w-full ">
        <Label>Confirme a senha: </Label>
        <Input
          type="password"
          {...register('confirmPassword', {
            required: true,
            validate: (value) => value === getValues('password'),
          })}
          className="border-2 border-primary/30 max-w-72 w-72"
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {'A senhas não são iguais.'}
          </span>
        )}
      </div>
      <Button type="submit" className="my-2">
        Cadastrar
      </Button>
    </form>
  )
}
