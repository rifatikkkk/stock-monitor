import { useController, type Control } from "react-hook-form"

type Props = {
  name: string
  type?: "text" | "email"
  placeholder?: string
  control: Control<any>
}

export const Input: React.FC<Props> = ({
  type,
  placeholder,
  name,
  control,
}) => {
  const { field } = useController({
    name,
    control,
  })
  return (
    <input
      id={name}
      onChange={field.onChange}
      type={type}
      className="bg-background p-4 rounded-xl w-full"
      placeholder={placeholder}
    />
  )
}
