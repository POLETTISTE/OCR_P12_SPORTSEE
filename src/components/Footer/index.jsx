import React from 'react'
import '../Footer/style.scss'

import yoga from '../../assets/yoga.png'
import swim from '../../assets/swim.png'
import bike from '../../assets/bike.png'
import dumbbells from '../../assets/dumbbells.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-thumbs">
        <img src={yoga} alt="" />
        <img src={swim} alt="" />
        <img src={bike} alt="" />
        <img src={dumbbells} alt="" />
      </div>
      <div className="footer-copyright">Copyright, SportSee 2020</div>
    </div>
  )
}

export default Footer
