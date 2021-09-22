
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
import { updateCityInfo, updateDateInfo, getFlyState } from '@/views/airport/flyIndex/flyIndexSlice'

import { AirPortCity, CalenderPrice } from '@/components';
import { Calendar } from 'react-vant'
import UtilDate from '@/utils/dateFormat';
const FlyCard = ({
}) => {

  const [cityShow, setCityShow] = useState(false);
  const [calenderShow, setCalenderShow] = useState(false);
  const [isExchange, setIsExchange] = useState(0);
  const [cityType, setCityType] = useState(0);
  const [dateType, setDateType] = useState(0);

  const flyState = useSelector(getFlyState);
  const dispatch = useDispatch();
  const {aName = '', aCode = '', dName = '', dCode = '', tripType = 0, aDate = '', dDate = ''} = flyState;

  useEffect(() => {
    cacheSet('fly-index_exchange', isExchange);
  }, [])

  const handleExChange = () => {
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
    setDateType(type);
    setCalenderShow(true);
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


  const handelConfirmDate = (date) => {
    // const [ goDate = dDate, backDate = aDate ] = date;
    // const ddDate = UtilDate.format(goDate, 'YYYY-MM-DD')
    // const aaDate = UtilDate.format(backDate, 'YYYY-MM-DD')

    console.log(date, 'confirm ddDate date');
    // console.log(aaDate, 'confirm aaDate date');

    dispatch(updateDateInfo({
      aDate: date.backDate,
      dDate: date.goDate,
    }))
    setCalenderShow(false)

  }

  const handelCheckDate = (date) => {
    console.log(date, 'choose date');
    
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
      <CalenderPrice 
        visible={calenderShow} 
        type={tripType}
        dateType={dateType}
        dDate={dDate}
        aDate={aDate}
        onConfirm={handelConfirmDate} 
        onClose={() => setCalenderShow(false)} 
        onChangeDate={type => setDateType(type)}
      />
      

    </div>
  )
}


export default FlyCard