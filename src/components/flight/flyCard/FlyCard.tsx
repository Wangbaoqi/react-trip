
import React, { useState } from 'react'

import './FlyCard.scss';
import { Divider } from 'react-vant';
import { 
  FlyCardCity, 
  FlyCardDate, 
  FlyCardCabin, 
  FlyCardSearch, 
  FlyCardTips 
} from './index';


const FlyCard = ({
  handleChange,
  isExchange
}) => {

  // const

  return (
    <div className="fly-card mt-15 pa-20">
      <FlyCardCity isExchange={isExchange} handleChange={handleChange}/>
      <FlyCardDate />
      <Divider className='divider-line mv-10'/>
      <FlyCardCabin />
      <FlyCardSearch />
      <FlyCardTips />
    </div>
  )
}


export default FlyCard