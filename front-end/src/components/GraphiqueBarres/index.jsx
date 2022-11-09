// import React from 'react'
import './style.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { USER_ACTIVITY } from '../../data/mocked-data'
import { Modelisation } from '../../data/Modelisation'

// import React, { PureComponent } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ]
const GraphiqueBarres = () => {
  const paramsId = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    const modelisation = new Modelisation(USER_ACTIVITY)
    setData(modelisation.formatDataActivity(paramsId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (data !== null) {
    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip-graphique">
            <p className="kg">{data[label - 1].uv}kg</p>
            <p className="Kcal">{data[label - 1].pv}Kcal</p>
          </div>
        )
      }

      return null
    }

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 145,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap="40"
        >
          <Legend />
          <CartesianGrid vertical={false} strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis dataKey="uv" orientation="right" />
          <Tooltip content={<CustomTooltip />} />

          <Bar
            dataKey="uv"
            fill="var(--dark-grey)"
            legendType="circle"
            name="Poids (kg)"
          />
          <Bar
            dataKey="pv"
            fill="var(--red)"
            legendType="circle"
            name="Calories brûlées (kCal)"
          />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}
export default GraphiqueBarres
