import './style.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { USER_PERFORMANCE } from '../../data/mocked-data'
import { Modelisation } from '../../data/Modelisation'

import React, { PureComponent } from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

const DiagrammeToile = (props) => {
  const className = props.className

  const paramsId = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    const modelisation = new Modelisation(USER_PERFORMANCE)
    setData(modelisation.formatDataRadarChart(paramsId))
  }, [])

  console.log(data)
  if (data !== null) {
    return (
      <div className={`diagrammes-item diagrammes_diagramme-${className}`}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={data}
            fill="white"
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            {/* <PolarRadiusAxis /> */}
            <Radar
              name="Mike"
              dataKey="A"
              stroke="var(--red)"
              fill="var(--red)"
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default DiagrammeToile
