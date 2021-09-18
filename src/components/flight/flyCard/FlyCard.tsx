
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
import { updateCityInfo, getFlyState } from '@/views/airport/flyIndex/flyIndexSlice'

import { AirPortCity, CalenderPrice } from '@/components';

const FlyCard = ({
}) => {

  const [cityShow, setCityShow] = useState(false);
  const [calenderShow, setCalenderShow] = useState(false);
  const [isExchange, setIsExchange] = useState(0);
  const [cityType, setCityType] = useState(0);

  const flyState = useSelector(getFlyState);
  const dispatch = useDispatch();

  useEffect(() => {
    cacheSet('fly-index_exchange', isExchange);
  }, [])

  const handleExChange = () => {
    const {aName = '', aCode = '', dName = '', dCode = ''} = flyState;
    dispatch(updateCityInfo({
      aName: dName,
      aCode: dCode,
      dName: aName,
      dCode: aCode
    }))
    setIsExchange(1)
    setTimeout(() => {
      setIsExchange(0)
    }, 500);
  }

  const handleCityShow = (type) => {
    setCityType(type)
    setCityShow(true)
  }
  const handleCalenderShow = (type) => {
    setCalenderShow(true)
  }

  const handleCheckCity = (city) => {
    console.log(city, cityType, 'city');
    const { code, name} = city;
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

  const handelCheckDate = (date) => {

  }

  return (
    <div className="fly-card mt-15 pa-20">
      <FlyCardCity isExchange={isExchange} handleChange={handleExChange} handleCity={handleCityShow}/>
      <FlyCardDate handleCalender={handleCalenderShow}/>
      <Divider className='divider-line mv-10'/>
      <FlyCardCabin />
      <FlyCardSearch />
      <FlyCardTips />

      <AirPortCity visible={cityShow} onCheck={handleCheckCity} closePop={() => { setCityShow(false) }} />
      <CalenderPrice visible={calenderShow} onConfirm={handelCheckDate} onClose={() => setCalenderShow(false)}  />
      
    </div>
  )
}


export default FlyCard