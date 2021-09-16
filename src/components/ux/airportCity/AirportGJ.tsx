import React, { useEffect, useState } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import { AirPortCityIndex } from './PropTypes'
import { Sidebar, Flex } from 'react-vant';


const AirportGJ = ({
  airportCity
}) => {
  const [active, setActive] = useState(0);

  const { hl = [], pl = [], rg = [] } = airportCity;

  const [activeList, setActiveList] = useState<AirPortCityIndex[]>([]);

  useEffect(() => {
    let historyHot = {
      rname: '历史/热门',
      areal: [
        {
          p: '当前/历史（国家、地区或城市',
          cl: []
        },{
          p: '热门',
          cl: hl
        }
      ]
    }
    const indexAZ = {
      rname: 'A-Z',
      areal: pl
    }
    const isIndex = rg.some(e => e.rname == 'A-Z');
    const isHis = rg.some(e => e.rname == '历史/热门');
    !isIndex && rg.unshift(indexAZ);
    !isHis && rg.unshift(historyHot);
    setActiveList([...historyHot.areal])
    console.log(rg, 'rg data');
  }, []);
  
  
  const checkCityType = (item) => {
    console.log(item, 'item interCity');
    setActiveList(item.areal)
  }

  
  return (
    <section className='airport-inCity'>
      <Flex >
        <Flex.Item span={6}>
          <Sidebar value={active} onChange={setActive} className='airport-inCity__sideBar font-14'>
            {
              rg.map((im, idx) => {
                return (
                  <Sidebar.Item key={idx} title={im.rname} onClick={() => checkCityType(im)}/>
                )
              })
            }
          </Sidebar>
        </Flex.Item>
        <Flex.Item span={18}>
          <section className='airport-inCity__content'>
            {
              activeList.map((im, idx) => {
                return (
                  <div className='airport-inCity__item-container' key={idx}>
                    <p className='airport-inCity__item-title font-10'>{im.p}</p>
                    <Flex className='airport-inCity__item-box' wrap='wrap' gutter={10}>
                      {
                        im.cl && im.cl.map((it, i) => {
                          return (
                            <Flex.Item span={idx == 0 ? 8 : 12} key={i}>
                              <div className='airport-inCity__item-block font-14'>{it.name}</div>
                            </Flex.Item>
                          )
                        })
                      }
                    </Flex>
                </div>
                )
              })
            }
          </section>
        </Flex.Item>
      </Flex>
      
    </section>
  )
};

export default AirportGJ
