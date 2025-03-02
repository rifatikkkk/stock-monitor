import { type FormEventHandler } from "react"
import { Input } from "../../../../shared/ui/input"
import { Button } from "../../../../shared/ui/button"
import { type Control } from "react-hook-form"

type Props = {
  onSubmit: FormEventHandler<HTMLFormElement> | undefined
  control: Control<any>
}

export const Search: React.FC<Props> = ({ onSubmit, control }) => {
  return (
    <form
      className="flex flex-row gap-10 justify-between bg-background-form p-4 border-0 rounded-3xl items-end"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-2 w-full">
        <p>Symbol</p>
        <Input
          control={control}
          name="search"
          type="text"
          placeholder="Symbol, name, isin, or cusip"
        />
      </div>

      <Button type="submit">Search</Button>
    </form>
  )
}
