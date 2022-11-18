import { Rectangle } from 'recharts'
import './style.scss'

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

export default CustomCursor
