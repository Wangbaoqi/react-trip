
import React, { useEffect, useState } from 'react'

import './FlyCard.scss';
import { Divider } from 'react-vant';
import { useDispatch, useSelector } from 'react-redux';
import { 
  FlyCardCity, 
  FlyCardDate, 
  FlyCardCabin, 
  FlyCardSearch, 
  FlyCardTips 
} from './index';
import { cacheGet, cacheSet } from '@/utils/cache';
import { updateCityInfo, getFlyState } from '@/views/airport/flyIndex/FlyIndexSlice'

import { AirPortCity  } from '@/components';

const FlyCard = ({
}) => {

  // const
  const [cityShow, setCityShow] = useState(false);
  const [isExchange, setIsExchange] = useState(0);
  const [cityType, setCityType] = useState(0);

  const flyState = useSelector(getFlyState);
  const dispatch = useDispatch();

  useEffect(() => {
    cacheSet('fly-index_exchange', isExchange);
  }, [])

  const handleExChange = () => {
    
    setIsExchange(1)
    setTimeout(() => {
      setIsExchange(0)
    }, 500);
  }

  const handleCityShow = (type) => {
    setCityType(type)
    setCityShow(true)
  }

  const handleCheckCity = (city) => {
    console.log(city, cityType, 'city');
    const { code, name} = city;
    let cityInfo = {};
    if(cityType) {
      dispatch(updateCityInfo({
        aName: name,
        aCode: code
      }))
    } else {
      dispatch(updateCityInfo({
        dName: name,
        dCode: code
      }))
    }
    setCityShow(false)

  }


  return (
    <div className="fly-card mt-15 pa-20">
      <FlyCardCity isExchange={isExchange} handleChange={handleExChange} handleCity={handleCityShow}/>
      <FlyCardDate />
      <Divider className='divider-line mv-10'/>
      <FlyCardCabin />
      <FlyCardSearch />
      <FlyCardTips />

      <AirPortCity visible={cityShow} onCheck={handleCheckCity} closePop={() => { setCityShow(false) }} />

      
    </div>
  )
}


export default FlyCard