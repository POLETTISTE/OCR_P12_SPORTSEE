import './style.scss'
import React, { PureComponent } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'
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
  // const data02 = [{ name: 'A1', value: 12 }]
  // console.log(data)
  return (
    <div className={`diagrammes-item diagrammes_diagramme-${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          {/* <Pie
            data={[data]}

            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          /> */}
          <Pie
            data={[data]}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#FF0000"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DiagrammeScore
