import './style.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { USER_PERFORMANCE } from '../../data/mocked-data'
import { Modelisation } from '../../data/Modelisation'
import useFetch from '../../hooks/useFetch'

// import React, { PureComponent } from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  // PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

function DiagrammeToile({ userId }) {
  const { data, error } = useFetch(
    `http://localhost:3000/user/${userId}/performance`,
    getUserDataMockWithId()
  )

  function getUserDataMockWithId() {
    // console.log('dans fonction getUserDataMockWithId')
    const userData = USER_PERFORMANCE.find((user) => +user.userId === +userId)
    // console.log('userdata', userData)
    return userData
  }

  function getData() {
    const modelisation = new Modelisation(data)
    // console.log('modelisation', modelisation)
    return modelisation.formatDataRadarChart()
  }

  // console.log(data)
  if (data !== null) {
    return (
      <div className={`diagrammes-item diagrammes_diagramme-toile`}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="55%"
            data={getData()}
            fill="white"
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} />
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
