import { useEffect, useState } from "react"
import { Search, Table } from "../../../features/stock"
import { Title } from "../../../shared/ui/title"
import { useForm } from "react-hook-form"

type SearchType = {
  search: string
}

export const Monitor = () => {
  const [search, setSearch] = useState<string>("")
  const [count, setCount] = useState<number>(0)

  const { handleSubmit, control } = useForm<SearchType>({
    mode: "onChange",
    defaultValues: {
      search: "",
    },
  })

  useEffect(() => {
    // auto call function with handle ?? don't work because search string not edit ?? need work inside table
    const timer = setTimeout(() => {
      handleSubmit(onSubmit)
      setCount(count + 1)
      console.log("execute timeout", count)
    }, 5000)
    return () => clearTimeout(timer)
  }, [count, handleSubmit])

  const onSubmit = (data: SearchType) => {
    setSearch(data.search)
  }

  return (
    <main className="grow-1">
      <section className="flex flex-col gap-4">
        <Title title="Stock Monitor" />
        <Search onSubmit={handleSubmit(onSubmit)} control={control} />

        {search !== "" ? <Table search={search} /> : <Table search="MS" />}
      </section>
    </main>
  )
}
