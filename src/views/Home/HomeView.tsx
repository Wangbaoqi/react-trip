import React, { Fragment, useState, useEffect } from 'react'


import styled from './HomeView.module.scss'






const Home = () => {


  const [toggleType, setToggleType] = useState(0)


  const handleToggle = (e) => {
    console.log(e);
    setToggleType(e.type)
  }

  const data = [
    {
      type: 0,
      value: '单程'
    },{
      type: 1,
      value: '往返'
    }
  ]


  return (
    <div className={styled.indexFlight}>
      <section className={styled.flightCard}>
        <div className={styled.flightHeader}>
          <div className={styled.flightLogo}></div>
          <div className={styled.flightToggle}>
            {
              data.map((item, idx) => (
                <span key={idx} className={toggleType == item.type ? styled.toggleItemCurrent : styled.toggleItem} 
                  onClick={() => handleToggle(item)}>{item.value}</span>
              ))
            }
          </div>
          <div className={styled.userIcon}></div>
        </div>

        <div className={styled.testStyle}>
          CSS sass
        </div>
      </section>
    </div>
  )
}

export default Home