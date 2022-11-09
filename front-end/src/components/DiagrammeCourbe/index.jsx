import './style.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { USER_AVERAGE_SESSIONS } from '../../data/mocked-data'
import { Modelisation } from '../../data/Modelisation'

// import React, { PureComponent } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  // YAxis,
  Tooltip,
  // Legend,
  ResponsiveContainer,
} from 'recharts'

const DiagrammeCourbe = (props) => {
  const className = props.className
  const [data, setData] = useState(null)
  const paramsId = useParams()

  useEffect(() => {
    const modelisation = new Modelisation(USER_AVERAGE_SESSIONS)
    setData(modelisation.formatDataSessions(paramsId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (data !== null) {
    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip-courbe">
            <p className="kg">{`${payload[0].value} min`}</p>
          </div>
        )
      }

      return null
    }
    return (
      <div className={`diagrammes-item diagrammes_diagramme-${className}`}>
        <p className="title">
          Durée moyenne des
          <br />
          sessions
        </p>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            // width={300}
            data={data}
            margin={{
              top: 55,
              right: 12,
              left: 12,
              bottom: 5,
            }}
          >
            <Line
              type="natural"
              dataKey="pv"
              stroke="white"
              strokeWidth={1}
              fill="white"
            />

            <XAxis
              dataKey="name"
              stroke="rgba(255,255,255, 0.5)"
              strokeWidth={0}
              tick={{ fontSize: 12 }}
            />

            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{ outline: 'none' }}
              cursor={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default DiagrammeCourbe
