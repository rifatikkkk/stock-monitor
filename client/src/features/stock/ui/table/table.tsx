import { type Info, useGetInfoStockQuery } from "../../../../entities"
import { type ChangeEvent, useEffect, useState } from "react"
import { type OptionType } from "../../../../shared/types"
import { Select } from "../../../../shared/ui/select"

type Props = {
  search: string
  onOpenGraphic: React.MouseEventHandler<HTMLElement>
}

const options: OptionType[] = [
  {
    value: "0",
    name: "no filter",
  },
  {
    value: "1",
    name: "ascending",
  },
  {
    value: "2",
    name: "descending",
  },
]

export const Table: React.FC<Props> = ({ search, onOpenGraphic }) => {
  const { data } = useGetInfoStockQuery(search)
  const [tableData, setTableData] = useState<Info[] | undefined>()
  const [selectedFilter, setSelectedFilter] = useState<number>(0)

  useEffect(() => {
    setTableData(data)
  }, [data])

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedFilter(Number(e.target.value))
  }

  return (
    <table className="text-left table-auto min-w-full text-white rounded-3xl p-4 bg-background-form">
      <thead className="text-center">
        <tr className="text-center">
          <th className="p-4">
            <h4 className="text-white text-xl font-normal">Symbol</h4>
          </th>
          <th className="p-4">
            <h4 className="text-white text-xl font-normal">Current Price</h4>
          </th>
          <th className="p-4">
            <h4 className="text-white text-xl font-normal">Change Price</h4>
          </th>
          <th className="p-4">
            <Select
              onChange={handleSelectChange}
              defaultValues={0}
              name="filters"
              options={options}
            />
          </th>
        </tr>
      </thead>
      <tbody className="text-sm w-full min-h-screen">
        {tableData
          ?.filter(value => {
            return selectedFilter === 0
              ? true
              : value.c != null && value.o != null
                ? selectedFilter === 1
                  ? value.c > value.o
                  : value.c < value.o
                : false
          })
          .map((stock, index) => {
            return (
              <tr
                key={index}
                onClick={stock.c && stock.o ? onOpenGraphic : undefined}
                className={`border-b-1 text-center border-white ${stock.c && stock.o ? "cursor-pointer" : null}`}
              >
                <td className="py-4 pr-4 ">
                  <p>{stock.displaySymbol}</p>
                </td>
                <td className="py-4 pr-4">
                  <p>{stock.c != null ? stock.c : "no access or null"}</p>
                </td>
                <td className="py-4 pr-4">
                  <p>{stock.d != null ? stock.d : "no access or null"}</p>
                </td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}
