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

const GraphiqueBarres = () => {
  const paramsId = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    const modelisation = new Modelisation(USER_ACTIVITY)
    setData(modelisation.formatDataActivity(paramsId))
  }, [paramsId])

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
      <div className="graphique">
        <p className="graphique-title">Activité quotidienne</p>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barGap="10"
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <Legend
              verticalAlign="top"
              align="right"
              iconSize="8"
              height={40}
            />
            <CartesianGrid vertical={false} strokeDasharray="2 2" />
            <XAxis dataKey="name" strokeWidth={0} />

            <YAxis
              yAxisId={1}
              dataKey="uv"
              orientation="right"
              type="number"
              domain={['dataMin-1', 'dataMax+1']}
              allowDecimals={false}
              tickCount={4}
              strokeWidth={0}
            />
            <YAxis hide dataKey="pv" yAxisId={2} />

            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{
                outline: 'none',
              }}
            />

            <Bar
              yAxisId={1}
              dataKey="uv"
              fill="var(--dark-grey)"
              legendType="circle"
              name="Poids (kg)"
              barSize={10}
              radius={[10, 10, 0, 0]}
            />
            <Bar
              yAxisId={2}
              dataKey="pv"
              fill="var(--red)"
              legendType="circle"
              name="Calories brûlées (kCal)"
              barSize={10}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
export default GraphiqueBarres
