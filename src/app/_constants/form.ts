import { LoginInputFormProps, RegisterInputFormProps } from '../interfaces'

export const registerForm: RegisterInputFormProps[] = [
  {
    label: 'Compania',
    placeholder: 'Digite o nome da compania',
    type: 'text',
    classNameString: classInputRegister,
    inputName: 'company',
  },
  {
    label: 'E-mail',
    placeholder: 'Digite o seu e-mail',
    type: 'email',
    classNameString: classInputRegister,
    inputName: 'email',
  },
  {
    label: 'Senha',
    placeholder: 'Digite a sua senha',
    type: 'password',
    classNameString: classInputRegister,
    inputName: 'password',
  },
  {
    label: 'Confirmar Senha',
    placeholder: 'Confirme a sua senha',
    type: 'password',
    classNameString: classInputRegister,
    inputName: 'confirmPassword',
  },
  {
    label: 'CNPJ',
    placeholder: 'Digite o CNPJ da sua empresa',
    type: 'text',
    classNameString: classInputRegister,
    inputName: 'cnpj',
  },
]

export const loginForm: LoginInputFormProps[] = [
  {
    label: 'E-mail',
    placeholder: 'Digite o seu e-mail',
    type: 'email',
    classNameString: classInputRegister,
    inputName: 'email',
  },
  {
    label: 'Senha',
    placeholder: 'Digite a sua senha',
    type: 'password',
    classNameString: classInputRegister,
    inputName: 'password',
  },
]
