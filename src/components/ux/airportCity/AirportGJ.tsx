import React, { useEffect, useState } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import { AirPortCityIndex } from '@/views/airport/flyIndex/PropTypes';

import { Sidebar, Flex } from 'react-vant';
import classNames from "classnames";


const AirportGJ = ({
  airportCity,
  onCheck
}) => {
  const [active, setActive] = useState(0);
  const { hl = [], pl = [], rg = [] } = airportCity;

  const [activeList, setActiveList] = useState<AirPortCityIndex[]>([]);

  useEffect(() => {
    console.log(rg, 'rg data');
    rg[0]?.areal && setActiveList(rg[0].areal)
  }, []);
  
  
  const checkCityType = (item) => {
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
                          const inCityCls = classNames('airport-inCity__item-block', 'font-14', {
                            'airport-inCity__item-block--active': it.checked
                          })
                          return (
                            <Flex.Item span={idx == 0 ? 8 : 12} key={i}>
                              <div className={inCityCls} onClick={() => onCheck(it)}>{it.name}</div>
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
