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
            <p className="kg">{`${payload[1].value} Kcal`}</p>
            <p className="kg">{`${payload[0].value} kg`}</p>
          </div>
        )
      }

      return null
    }

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          // width={500}
          // height={300}
          data={data}
          // barCategoryGap="40"
          barGap="10"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Legend verticalAlign="top" align="right" />
          <CartesianGrid vertical={false} strokeDasharray="2 2" />
          <XAxis dataKey="name" strokeWidth={0} />
          <YAxis
            dataKey="uv"
            orientation="right"
            type="number"
            domain={['dataMin-1', 'dataMax']}
            tickCount={3}
            strokeWidth={0}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
          />

          <Bar
            dataKey="uv"
            fill="var(--dark-grey)"
            legendType="circle"
            name="Poids (kg)"
            barSize={10}
          />
          <Bar
            dataKey="pv"
            fill="var(--red)"
            legendType="circle"
            name="Calories brûlées (kCal)"
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}
export default GraphiqueBarres
