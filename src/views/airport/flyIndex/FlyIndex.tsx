import React, { Fragment, useState, useEffect, Suspense } from "react";

import "./FlyIndex.scss";

import classNames from "classnames";
import { Icon, Button } from "react-vant";
 
import { useDispatch, useSelector } from 'react-redux';


import { FlyHeader, FlyCard, Counter } from '@/components/index'

import { cacheGet, cacheSet } from '@/utils/cache';
import { getAirportList } from '@/api/flyIndex'


import { changeTripType, updateCityInfo, updateCabinInfo, updateDateInfo, getFlyState } from "./FlyIndexSlice";

const defaultCityInfo = {
  dep: {

  }
}
const FlyIndex = () => {
  const [toggleType, setToggleType] = useState(0);


  const [cityInfo, setCityInfo] = useState(defaultCityInfo);

  const flyState = useSelector(getFlyState);
  const dispatch = useDispatch();

  useEffect(() => {

  }, []);



  const handleToggle = (e) => {
    console.log(e);
    setToggleType(e.type);
    dispatch(changeTripType(e.type))
  };


  const handleCityInfo = () => {
    const newCity = {
      aCode: "PEK",
      aName: "北京",
      dCode: "CTU",
      dName: "成都"
    }
    dispatch(updateCityInfo(newCity))
  }
 
  

  const data = [
    {
      type: 0,
      value: "单程",
    },
    {
      type: 1,
      value: "往返",
    }
  ];

  return (
    <div className="fly">
      <section className="fly__flight">
        <FlyHeader data={data} toggleType={toggleType} handleToggle={handleToggle}/>
        <FlyCard />
        <div className="fly__history"></div>
      </section>


      <button onClick={() => dispatch(updateCabinInfo(2))}>changeCabin</button>
      <button onClick={handleCityInfo}>changeCity</button>


      <Button type="primary" size="large">大号按钮</Button>

    </div>
  );
};

export default FlyIndex;
