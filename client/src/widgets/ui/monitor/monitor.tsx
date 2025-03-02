import { useState } from "react"
import { Search, Table } from "../../../features/stock"
import { Title } from "../../../shared/ui/title"
import { useForm } from "react-hook-form"

type SearchType = {
  search: string
}

export const Monitor = () => {
  const [table, setTable] = useState<string>("")

  const { handleSubmit, control } = useForm<SearchType>({
    mode: "onChange",
    defaultValues: {
      search: "",
    },
  })

  const onSubmit = async (data: SearchType) => {
    setTable(data.search)
  }
  return (
    <main className="grow-1">
      <section className="flex flex-col gap-4">
        <Title title="Stock Monitor" />
        <Search onSubmit={handleSubmit(onSubmit)} control={control} />

        {table !== "" ? <Table search={table} /> : <Table search="MSFT" />}
      </section>
    </main>
  )
}
