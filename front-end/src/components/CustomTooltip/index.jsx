import './style.scss'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-graphique">
        <p className="Kcal">{`${payload[1].value} Kcal`}</p>
        <p className="kg">{`${payload[0].value} kg`}</p>
      </div>
    )
  }

  return null
}

export default CustomTooltip
