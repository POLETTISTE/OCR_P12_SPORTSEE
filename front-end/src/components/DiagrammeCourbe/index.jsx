import './style.scss'

import { USER_AVERAGE_SESSIONS } from '../../data/mocked-data'
import { Modelisation } from '../../data/Modelisation'
import useFetch from '../../hooks/useFetch'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from 'recharts'

function DiagrammeCourbe({ userId }) {
  const { data, error } = useFetch(
    `http://localhost:3000/user/${userId}/average-sessions`,
    getUserDataMockWithId()
  )

  function getUserDataMockWithId() {
    const userData = USER_AVERAGE_SESSIONS.find(
      (user) => +user.userId === +userId
    )
    return userData
  }

  function getData() {
    const modelisation = new Modelisation(data)
    return modelisation.formatDataSessions()
  }

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

    const CustomCursor = (prop) => {
      const { payloadIndex, width, points } = prop
      //rempli le cadre complètement si hover sur premier payload pour raison esthétique
      const X = payloadIndex === 0 ? points[0].x - 20 : points[0].x
      const Y = points[0].y
      const sum = width + 50
      return (
        <Rectangle
          width={sum}
          height={350}
          x={X}
          y={Y}
          style={{
            background: 'red',
            opacity: 0.1,
          }}
        />
      )
    }
    return (
      <div className={`diagrammes-item diagrammes_diagramme-courbe`}>
        <p className="title">
          Durée moyenne des <br />
          sessions
        </p>
        <ResponsiveContainer
          width="100%"
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <LineChart
            data={getData()}
            margin={{
              top: 0,
              right: 25,
              left: 25,
              bottom: 0,
            }}
          >
            <Line
              type="natural"
              dataKey="pv"
              stroke="white"
              strokeWidth={1}
              fill="white"
              dot={false}
              activeDot={{
                stroke: 'rgba(255,255,255, 0.6)',
                strokeWidth: 8,
                r: 5,
              }}
            />

            <XAxis
              dataKey="name"
              stroke="rgba(255,255,255, 0.5)"
              strokeWidth={0}
              tick={{ fontSize: 12 }}
            />
            <YAxis hide padding={{ top: 70, bottom: 20 }} />

            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{
                outline: 'none',
                // backgroundColor: 'transparent',
              }}
              cursor={<CustomCursor />}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
  // else {
  //   return <Navigate to="/*" />
  // }
}

export default DiagrammeCourbe
