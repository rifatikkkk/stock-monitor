import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { type Candles, mockCandle } from "../../"
import { useEffect, useState } from "react"
import { Button } from "../../../../shared/ui/button"

type MyType = {
  value: string
  date: string
}

type Props = {
  onCloseGraphic: React.MouseEventHandler<HTMLElement>
}

export const Graphic: React.FC<Props> = ({ onCloseGraphic }) => {
  const [data, setData] = useState<MyType[]>([])

  const convertUnixTimestampToDate = (unixTimestamp: number) => {
    const milliseconds = unixTimestamp * 1000
    return new Date(milliseconds).toLocaleDateString()
  }

  const formatData = (data: Candles) => {
    return data.c?.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimestampToDate(data.t[index]),
      }
    })
  }

  useEffect(() => {
    const updateChartData = () => {
      setData(formatData(mockCandle))
    }

    updateChartData()
  }, [])

  return (
    <div className="absolute top-3 left-3 right-3 p-8 border-2 bg-white border-neutral-200">
      <Button
        type="submit"
        onClick={onCloseGraphic}
        className="absolute right-1 top-1 p-2"
      >
        Close
      </Button>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#818cf8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fill="#818cf8"
            fillOpacity={1}
            strokeWidth={0.5}
          />
          <XAxis dataKey="date" />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
