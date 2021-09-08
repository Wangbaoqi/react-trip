
import React, { useState } from 'react'

import classNames from 'classnames';
import './FlyCard.scss';
import { flyIndexCircle, flyIndexFly } from '@/assets/imgConf';


const FlyCard = ({
  handleChange,
  isExchange
}) => {

  // const


  const startCls = classNames('fly-card__city-item', 'fly-card__city-start', 'font-24', 'text-left', {
    'fly-card__city--trans-left': isExchange
  })

  const endCls = classNames('fly-card__city-item', 'fly-card__city-end', 'font-24', 'text-right', {
    'fly-card__city--trans-right': isExchange
  })

  const iconCls = classNames({
    'fly-card__city-icon--trans': isExchange
  })

  return (
    <div className="fly-card">
      <div className='fly-card__city'>
        <div className={startCls}>上海</div>
        <div className='fly-card__city-icon' onClick={handleChange}>
          <span className='fly-card__city-icon--circle'>
            <img className={iconCls} src={flyIndexCircle} alt="" />
          </span>
          <span className='fly-card__city-icon--fly'>
            <img src={flyIndexFly} alt="" />
          </span>
        </div>
        <div className={endCls}>北京</div>
      </div>
      <div className='fly-card-date'></div>
      <div className='fly-card-cabin'></div>
      <div className='fly-card-search'></div>
      <div className='fly-card-tips'></div>
    </div>
  )
}


export default FlyCard