
// 
import { useState, useEffect } from "react";
import { Popup, Tabs, Sidebar, IndexBar, Cell } from "react-vant";
import AirPortGn from "./AirportGn";
import AirportGJ from "./AirportGJ";
import { AirPortCityProp, AirPortCityHot, AirPortCityIndex, AirPortCityState, AirPortCityData } from './PropTypes';
import { cacheGet } from '@/utils/cache';


import './AirPortCity.scss'



const AirPortCity = ({
  visible,
  onCheck,
  title='选择城市',
  closePop
}: AirPortCityProp) => {

  const [airportCity, setAirportCity] = useState<AirPortCityData>({} as AirPortCityData)

  useEffect(() => {

    const cityCacheData: string | null = cacheGet('AIRPORT_LIST_CITY_CACHE');

    if(cityCacheData) {
      const cityData = JSON.parse(cityCacheData)
      setAirportCity(cityData)
    }

  }, []);

  const { inland = {}, inter = {} } = airportCity
  const { hl = [], pl = []} = inland;

  const onCheckCity = (city) => {
    hl.map(e => {
      e.checked = false
      if(e.name == city.name) {
        e.checked = !e.checked
      }
    })
    pl.map(({cl = []}) => {
      cl.map(e => {
        e.checked = false
        if(e.name == city.name) {
          e.checked = !e.checked
        }
      })
    })
   
    setAirportCity({
      ...airportCity,
      ...inland
    })
    onCheck && onCheck(city)
  }

  return (
    <section>
       <Popup className='airport-city-box' visible={visible} title={title} closeable style={{height: '100%'}} position='bottom' onClose={closePop} >
        <Tabs active="a" animated>
          <Tabs.TabPane name='a' title="国内">
            <AirPortGn airportCity={inland} onCheck={onCheckCity}/>
          </Tabs.TabPane>
          <Tabs.TabPane name='b' title="国际/港澳台">
            <AirportGJ airportCity={inter}/>
          </Tabs.TabPane>
        </Tabs>

      </Popup>
    </section>
   
  )
}


export default AirPortCity