//
import { useState, useEffect } from "react";
import { Popup, Tabs, Sidebar, IndexBar, Flex } from "react-vant";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import classNames from "classnames";

import {
  AirPortCityProp,
  AirPortCityHot,
  AirPortCityIndex,
  AirPortGnProp,
} from "./PropTypes";

const AirPortGn = ({ 
  airportCity,
  onCheck
}) => {
  const { hl = [], pl = [] } = airportCity;

  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);


  return (
    <section className="airport-city-container">
      <div className="airport-city">
        <p className="airport-city__title font-10">热门</p>
        <Flex className="airport-city__box ph-16" wrap='wrap' gutter={20} align='center' justify='start'>
          {hl.map((im, idx) => {
            const cityItemCls = classNames('font-14',{
              'airport-city__item': true,
              'airport-city__item--active': im.checked
            })
            return (
              <Flex.Item span={6} className="airport-city__content" key={idx}>
                <div className={cityItemCls} onClick={() => onCheck(im)}>{im.name}</div>
              </Flex.Item>
            );
          })}
        </Flex>
      </div>

      <div className="airport-city font-10">
        <p className='airport-city__title'>字母索引</p>
        <Flex className='airport-city__box ph-16' wrap='wrap' gutter={10} align='center' justify='start'>
          {pl.map((im, idx) => {
            return (
              <Flex.Item span={3} className="airport-city__content font-13" key={idx} >
                <Link className="airport-city__item font-14" to='C' spy={true} smooth={true} duration={500}>{im.p}</Link>
              </Flex.Item>
            );
          })}
        </Flex>
      </div>
      <div className="airport-city">
        {pl.map((im, idx) => {
          return (
            <div key={idx}>
              <p className="airport-city__title font-10">{im.p}</p>
              <Flex wrap='wrap' align='center' justify='start' gutter={20} className='airport-city__box ph-16'>
                {im.cl.map((item, idx) => {
                  const cityItemCls = classNames('font-14',{
                    'airport-city__item': true,
                    'airport-city__item--active': item.checked
                  })
                  return (
                    <Flex.Item span={8} key={idx} className='airport-city__content'>
                      <div className={cityItemCls} onClick={() => onCheck(item)}>{item.name}</div>
                    </Flex.Item>
                  )}
                )}
              </Flex>
            </div>
          );
        })}
        <p></p>
      </div>
    </section>
  );
};

export default AirPortGn;
