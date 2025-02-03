const classInputRegister = 'border-2 border-primary/30 max-w-72 w-72'

export const registerForm: {
  label: string
  placeholder: string
  type: string
  classNameString: string
}[] = [
  {
    label: 'Compania',
    placeholder: 'Digite o nome da compania',
    type: 'text',
    classNameString: classInputRegister,
  },
  {
    label: 'E-mail',
    placeholder: 'Digite o seu e-mail',
    type: 'email',
    classNameString: classInputRegister,
  },
  {
    label: 'Senha',
    placeholder: 'Digite a sua senha',
    type: 'password',
    classNameString: classInputRegister,
  },
  {
    label: 'Confirmar Senha',
    placeholder: 'Confirme a sua senha',
    type: 'password',
    classNameString: classInputRegister,
  },
  {
    label: 'CNPJ',
    placeholder: 'Digite o CNPJ da sua empresa',
    type: 'text',
    classNameString: classInputRegister,
  },
]
