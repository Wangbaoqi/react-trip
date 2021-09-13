
// 
import { useState, useEffect } from "react";
import { Popup, Tabs, Sidebar } from "react-vant";
import { getAirportList } from "@/api/flyIndex";
import { AirPortCityProp, AirPortCityHot, AirPortCityIndex } from './PropTypes';






const AirPortCity = ({
  visible,
  onCheck,
  title,
  closePop
}: AirPortCityProp) => {

  const [airportCity, setAirportCity] = useState({
    hl:[],
    pl: []
  })

  useEffect(() => {
    getAirportList({}).then(res => {
      console.log(res, 'airport list');
      setAirportCity(res.data)
    })
  }, []);


  const { hl = [], pl = [] } = airportCity

  return (
    <section>
       <Popup className='airport-city-box' visible={visible} title={title} closeable style={{height: '100%'}} position='bottom' onClose={closePop}>
        <section></section>
        <Tabs active="a">
          <Tabs.TabPane name='a' title="国内">
            <section className='airport-city'>
              <div className='airport-city__hot'>
                <p>热门</p>
                <ul className='airport-city__hot-list'>
                  {
                    hl.map((im: AirPortCityHot, idx) => {

                      return (
                        <li className='airport-city__hot-item' key={idx}>
                          <div className=''>
                            {im.name}
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className='airport-city__letter'>
                <p>字母索引</p>
                <ul>
                  {
                    pl.map((im: AirPortCityIndex, idx) => {

                      return (
                        <li className='airport-city__hot-item' key={idx}>
                          <div className=''>
                            {im.p}
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className='airport-city__index'>
                { 
                  pl.map((im: AirPortCityIndex, idx) => {

                    return (
                      <div className='airport-city__hot-item' key={idx}>
                        <p className=''>
                          {im.p}
                        </p>
                        <ul>
                          {
                            im.cl.map((item, idx) => (
                              <li>
                                <div>
                                  {item.name}
                                </div>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    )
                  })
                  }
                <p></p>
              </div>
            </section>
          </Tabs.TabPane>
          <Tabs.TabPane name='b' title="国际/港澳台">国际/港澳台</Tabs.TabPane>
        </Tabs>
      </Popup>
    </section>
   
  )
}


export default AirPortCity