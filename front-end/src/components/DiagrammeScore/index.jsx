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

  const emptyScore = {
    name: 'empty-score',
    // value: 100 - data.value,
    value: 44,
    //ajouter style color transparent / enlever legende
  }
  //creer une data qui recupere l'espace vide (100-taille data modelisation)
  console.log(emptyScore)
  //creer constante globale data 1 + dataEmpty et call dans return
  const fulldata = [data, emptyScore]

  console.log(fulldata)

  // const data02 = [{ name: 'A1', value: 12 }]

  if (fulldata !== null) {
    return (
      <div className={`diagrammes-item diagrammes_diagramme-${className}`}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            {/* <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={60}
            fill="black"
            label
          /> */}
            <Pie
              data={fulldata}
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
}

export default DiagrammeScore
