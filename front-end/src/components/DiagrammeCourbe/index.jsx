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

const DiagrammeCourbe = (props) => {
  const className = props.className
  const [data, setData] = useState(null)
  const paramsId = useParams()

  useEffect(() => {
    const modelisation = new Modelisation(USER_AVERAGE_SESSIONS)
    setData(modelisation.formatDataSessions(paramsId))
  }, [])

  if (data !== null) {
    // console.log("data n'est pas nulle", data)
    return (
      <div className={`diagrammes-item diagrammes_diagramme-${className}`}>
        <div>Durée moyenne des sessions</div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={300} height={100} data={data}>
            <Line
              name="pv of pages"
              type="natural"
              dataKey="pv"
              stroke="white"
              strokeWidth={1}
              fill="white"
            />
            {/* <Line
              name="pv of pages"
              type="natural"
              dataKey="pv"
              stroke="white"
            /> */}

            <XAxis dataKey="name" stroke="white" strokeWidth={0} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default DiagrammeCourbe
