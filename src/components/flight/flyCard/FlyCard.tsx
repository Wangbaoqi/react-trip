
import React, { useEffect, useState } from 'react'

import './FlyCard.scss';
import { Divider } from 'react-vant';
import { 
  FlyCardCity, 
  FlyCardDate, 
  FlyCardCabin, 
  FlyCardSearch, 
  FlyCardTips 
} from './index';
import { cacheGet, cacheSet } from '@/utils/cache';
import { Popup, Tabs, Sidebar } from "react-vant";

import { AirPortCity } from '@/components';

const FlyCard = ({
}) => {

  // const
  const [cityShow, setCityShow] = useState(false);
  const [isExchange, setIsExchange] = useState(0);


  useEffect(() => {
    cacheSet('fly-index_exchange', isExchange);

  }, [])

  const handleExChange = () => {
    
    setIsExchange(1)
    setTimeout(() => {
      setIsExchange(0)
    }, 500);
  }

  const handleCheckCity = (e) => {
    setCityShow(true)
  }


  return (
    <div className="fly-card mt-15 pa-20">
      <FlyCardCity isExchange={isExchange} handleChange={handleExChange} handleCity={handleCheckCity}/>
      <FlyCardDate />
      <Divider className='divider-line mv-10'/>
      <FlyCardCabin />
      <FlyCardSearch />
      <FlyCardTips />

      {/* <AirPortCity visible={cityShow} closePop={() => { setCityShow(false) }}/> */}

      <Popup className='airport-city' visible={cityShow} closeable style={{height: '50%'}} position='bottom' onClose={() => { setCityShow(false) }}>
        <section>ddd</section>
        {/* <Tabs active="active">
          <Tabs.TabPane title="标签 1">内容 1</Tabs.TabPane>
          <Tabs.TabPane title="标签 2">内容 2</Tabs.TabPane>
        </Tabs> */}
      </Popup>
    </div>
  )
}


export default FlyCard