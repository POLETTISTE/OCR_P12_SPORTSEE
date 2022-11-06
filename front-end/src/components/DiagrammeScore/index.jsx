import './style.scss'
import React, { PureComponent } from 'react'
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { USER_MAIN_DATA } from '../../data/mocked-data'
import { Modelisation } from '../../data/Modelisation'

const DiagrammeScore = (props) => {
  const className = props.className

  const [data, setData] = useState(null)
  const paramsId = useParams()

  useEffect(() => {
    const modelisation = new Modelisation(USER_MAIN_DATA)
    setData(modelisation.formatDataScore(paramsId))
  }, [])

  if (data !== null) {
    return (
      <div className={`diagrammes-item diagrammes_diagramme-${className}`}>
        <p className="title-score">Score</p>
        <div className="objectif">
          <p className="objectif-score">{data.value}%</p>
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
                  value: 100 - data.value,
                  // value: 70,
                  //ajouter style color transparent / enlever legende
                },
                data,
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
