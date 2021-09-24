import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { 
  FlyCardCity, 
  FlyCardDate, 
  FlyCardCabin, 
  FlyCardSearch, 
  FlyCardTips 
} from './index';
// import { cacheSet } from '@/utils/cache';
import { updateCityInfo, updateDateInfo,updateCabinInfo, getFlyState } from '@/views/airport/flyIndex/flyIndexSlice'
import { AirPortCity, CalenderPrice, CabinSelect } from '@/components';
import { Divider } from 'react-vant';
import './FlyCard.scss';

const FlyCard = () => {
  const cabinList = ['经济舱', '公务舱/头等舱']
  const flyState = useSelector(getFlyState);
  const dispatch = useDispatch();
  const {aName = '', aCode = '', dName = '', dCode = '', tripType = 0, aDate = '', dDate = '', selectCabin = 0 } = flyState;

  const [cityShow, setCityShow] = useState(false);
  const [calenderShow, setCalenderShow] = useState(false);
  const [cabinShow, setCabinShow] = useState(false);
  const [cabinCheckId, setCabinCheckId] = useState(selectCabin);
  const [isExchange, setIsExchange] = useState(0);
  const [cityType, setCityType] = useState(0);
  const [dateType, setDateType] = useState(0);

  useEffect(() => {
    // cacheSet('fly-index_exchange', isExchange);
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

  const handleSelectCabin = (id) => {
    dispatch(updateCabinInfo(id))
    setCabinCheckId(id)
    setCabinShow(false)
  }

  const handelConfirmDate = (date) => {
    dispatch(updateDateInfo({
      aDate: date.backDate,
      dDate: date.goDate,
    }))
    setCalenderShow(false)
  }

  return (
    <div className="fly-card mt-15 pa-20">
      <FlyCardCity isExchange={isExchange} handleChange={handleExChange} handleCity={handleCityShow}/>
      <FlyCardDate handleCalender={handleCalenderShow}/>
      <Divider className='divider-line mv-10'/>
      <FlyCardCabin cabinId={cabinCheckId} cabinList={cabinList} handleCabin={() => setCabinShow(true)}/>
      <FlyCardSearch />
      <FlyCardTips />
      {/* pop city */}
      <AirPortCity 
        visible={cityShow} 
        onCheck={handleCheckCity} 
        closePop={() => { setCityShow(false) }} 
      />
      {/* pop Calender */}
      <CalenderPrice 
        visible={calenderShow} 
        type={tripType}
        dateType={dateType}
        dDate={dDate}
        aDate={aDate}
        onConfirm={handelConfirmDate} 
        onClose={() => setCalenderShow(false)} 
      />
      {/* pop cabin */}
      <CabinSelect 
        visible={cabinShow} 
        cabinList={cabinList} 
        checkedId={cabinCheckId} 
        selectCabin={handleSelectCabin}
        closeCabin={() => setCabinShow(false)}
      />
    </div>
  )
}


export default FlyCard