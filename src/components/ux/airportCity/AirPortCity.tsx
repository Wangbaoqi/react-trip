
// 
import { useState, useEffect } from "react";
import { Popup, Tabs, Sidebar } from "react-vant";
import { getAirportList } from "@/api/flyIndex";
import { AirPortCityProp } from './PropTypes';

const AirPortCity = ({
  visible,
  onCheck,
  title,
  closePop
}: AirPortCityProp) => {

  useEffect(() => {
    getAirportList({}).then(res => {
      console.log(res, 'airport list');
      
    })
  }, []);

  return (
    <section>
       <Popup className='airport-city' visible={visible} closeable style={{height: '100%'}} position='bottom' onClose={closePop}>
        <section></section>
        {/* <Tabs active="active">
          <Tabs.TabPane title="标签 1">内容 1</Tabs.TabPane>
          <Tabs.TabPane title="标签 2">内容 2</Tabs.TabPane>
        </Tabs> */}
      </Popup>
    </section>
   
  )
}


export default AirPortCity