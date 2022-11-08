import './style.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { USER_AVERAGE_SESSIONS } from '../../data/mocked-data'
import { Modelisation } from '../../data/Modelisation'

import React, { PureComponent } from 'react'
import {
  LineChart,
  Line,
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

const DiagrammeCourbe = (props) => {
  const className = props.className
  const [data, setData] = useState(null)
  const paramsId = useParams()

  useEffect(() => {
    const modelisation = new Modelisation(USER_AVERAGE_SESSIONS)
    setData(modelisation.formatDataSessions(paramsId))
  }, [])

  if (data !== null) {
    console.log("data n'est pas nulle", data)
    return (
      <div className={`diagrammes-item diagrammes_diagramme-${className}`}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={300} height={100} data={data}>
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default DiagrammeCourbe
