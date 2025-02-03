import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { InputFormProps } from '../interfaces'

export const InputForm = ({
  label,
  placeholder,
  type,
  classNameString,
}: InputFormProps) => {
  return (
    <div
      className={
        'sm:grid sm:grid-cols-[100px_minmax(300px,_1fr)] gap-2 mb-2 items-center flex flex-col justify-center w-full '
      }
    >
      {label && <Label>{label}: </Label>}
      <Input
        placeholder={placeholder ?? ''}
        type={type ?? 'text'}
        className={classNameString ?? ''}
      />
    </div>
  )
}
