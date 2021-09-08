import React, { Fragment, useState, useEffect, Suspense } from "react";

import "./FlyIndex.scss";

import classNames from "classnames";
import { Icon } from "react-vant";


import { FlyHeader, FlyCard } from '@/components/index'
// import Menu from "@/components/menu/Meun";

import { cacheGet, cacheSet } from '@/utils/cache';

const defaultCityInfo = {
  dep: {

  }
}
const FlyIndex = () => {
  const [toggleType, setToggleType] = useState(0);

  const [isExchange, setIsExchange] = useState(0);

  const [cityInfo, setCityInfo] = useState(defaultCityInfo);

  useEffect(() => {
    cacheSet('fly-index_exchange', isExchange)
  }, [])

  const handleToggle = (e) => {
    console.log(e);
    setToggleType(e.type);
  };
 
  const handleChange = () => {
    setIsExchange(1)
    setTimeout(() => {
      setIsExchange(0)
    }, 500);
  }

  const data = [
    {
      type: 0,
      value: "单程",
    },
    {
      type: 1,
      value: "往返",
    },
  ];

  return (
    <div className="fly">
      <section className="fly__flight">
        <FlyHeader data={data} toggleType={toggleType} handleToggle={handleToggle}/>
        <FlyCard handleChange={handleChange} isExchange={isExchange}/>

        <div className="fly__history"></div>
      </section>
    </div>
  );
};

export default FlyIndex;
