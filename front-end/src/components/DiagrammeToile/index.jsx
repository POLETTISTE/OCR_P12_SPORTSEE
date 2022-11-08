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

// const data = [
//   {
//     subject: 'Math',
//     A: 120,
//     B: 110,
//     fullMark: 150,
//   },
//   {
//     subject: 'Chinese',
//     A: 98,
//     B: 130,
//     fullMark: 150,
//   },
//   {
//     subject: 'English',
//     A: 86,
//     B: 130,
//     fullMark: 150,
//   },
//   {
//     subject: 'Geography',
//     A: 99,
//     B: 100,
//     fullMark: 150,
//   },
//   {
//     subject: 'Physics',
//     A: 85,
//     B: 90,
//     fullMark: 150,
//   },
//   {
//     subject: 'History',
//     A: 65,
//     B: 85,
//     fullMark: 150,
//   },
// ]

const DiagrammeToile = (props) => {
  const className = props.className

  const [data, setData] = useState(null)
  const paramsId = useParams()

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
