import { useState } from "react"
import { Graphic, Table } from "../../../features/stock"

type Props = {
  search: string
}

export const Monitor: React.FC<Props> = ({ search }) => {
  const [showGhaphic, setShowGraphic] = useState(false)

  return (
    <div className="relative">
      <Table
        onOpenGraphic={() => setShowGraphic(true)}
        search={search !== "" ? search : "MS"}
      />
      {showGhaphic ? (
        <Graphic onCloseGraphic={() => setShowGraphic(false)} />
      ) : null}
    </div>
  )
}
