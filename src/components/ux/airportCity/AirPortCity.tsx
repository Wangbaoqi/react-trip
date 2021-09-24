import { useState, useEffect } from "react";
import { Popup, Tabs } from "react-vant";
import AirPortGn from "./AirportGn";
import AirportGJ from "./AirportGJ";
import { AirPortCityProp, AirPortCityData } from '@/views/airport/flyIndex/PropTypes';
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
    const cityCacheData = cacheGet('AIRPORT_LIST_CITY_CACHE');
    if(cityCacheData) {
      setAirportCity(cityCacheData)
    }
  }, []);

  const { inland = {}, inter = {} } = airportCity
  const { hl = [], pl = []} = inland;
  const { rg = [] } = inter;

  // TODO update has better ?
  const onCheckCity = (city) => {
    for (const im of hl) {
      im.checked = false;
      if(im.name === city.name) {
        im.checked = !im.checked;
      }
    }
    for (const im of pl) {
      for (const it of im.cl) {
        it.checked = false;
        if(it.name === city.name) {
          it.checked = !it.checked
        }
      }
    }
    setAirportCity({
      ...airportCity,
      ...inland
    })
    onCheck && onCheck(city)
  }

  // TODO update has better ?
  const onCheckInCity = (city) => {
    for (const im of rg) {
      for (const it of im.areal) {
        for (const iu of it.cl) {
          iu.checked = false;
          if(iu.name === city.name) {
            iu.checked = !iu.checked;
          }
        }
      }
    }
    setAirportCity({
      ...airportCity,
      ...inter
    })
    onCheck && onCheck(city)
  }

  return (
    <Popup className='airport-city-box' visible={visible} title={title} closeable style={{height: '100%'}} position='bottom' onClose={closePop} safeAreaInsetBottom={true}>
      <Tabs active="a" animated>
        <Tabs.TabPane name='a' title="国内">
          <AirPortGn airportCity={inland} onCheck={onCheckCity}/>
        </Tabs.TabPane>
        <Tabs.TabPane name='b' title="国际/港澳台">
          <AirportGJ airportCity={inter} onCheck={onCheckInCity}/>
        </Tabs.TabPane>
      </Tabs>
    </Popup>
  )
}


export default AirPortCity