import './style.scss'
// import React, { PureComponent } from 'react'
import {
  PieChart,
  Pie,
  // Sector,
  // Cell,
  ResponsiveContainer,
  // Legend,
} from 'recharts'

import { USER_MAIN_DATA } from '../../data/mocked-data'
import { Modelisation } from '../../data/Modelisation'
import useFetch from '../../hooks/useFetch'

function DiagrammeScore({ userId }) {
  const { data, error } = useFetch(
    `http://localhost:3000/user/${userId}`,
    getUserDataMockWithId()
  )
  function getUserDataMockWithId() {
    // console.log('dans fonction getUserDataMockWithId')
    const userData = USER_MAIN_DATA.find((user) => +user.id === +userId)
    // console.log('userdata', userData)
    return userData
  }

  function getData() {
    const modelisation = new Modelisation(data)
    return modelisation.formatDataScore()
  }

  if (data !== null) {
    console.log(getData())
    return (
      <div className={`diagrammes-item diagrammes_diagramme-score`}>
        <p className="title-score">Score</p>
        <div className="objectif">
          <p className="objectif-score">{getData()}%</p>
          <p className="objectif-score-texte">de votre</p>
          <p className="objectif-score-texte">objectif</p>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            {/* <Pie
              data={[]}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={60}
              fill="black"
              label
            /> */}
            <Pie
              data={[
                {
                  name: 'empty-score',
                  value: 100 - getData(),
                },
                {
                  name: 'score',
                  value: getData(),
                },
              ]}
              dataKey="value"
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              cornerRadius={40}
              innerRadius={80}
              outerRadius={90}
              fill="#FF0000"
              // label="labellll"
              // legendType="hellooo"
              // labelLine="hello"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default DiagrammeScore
