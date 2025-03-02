import { type ChangeEventHandler } from "react"
import { type OptionType } from "../../types"

type Props = {
  defaultValues: number | undefined
  name: string | undefined
  onChange: ChangeEventHandler<HTMLSelectElement> | undefined
  options: OptionType[] | undefined
}

export const Select: React.FC<Props> = ({
  defaultValues,
  name,
  onChange,
  options,
}) => {
  return (
    <select
      defaultValue={defaultValues}
      className="bg-custom-green rounded-xl p-4 cursor-pointer"
      name={name}
      onChange={onChange}
    >
      {options?.map(option => {
        return <option value={option.value}>{option.name}</option>
      })}
    </select>
  )
}
