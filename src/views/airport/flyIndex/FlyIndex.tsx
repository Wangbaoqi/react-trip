import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { FlyHeader, FlyCard } from '@/components/index'
import { getAirportList, getCalenderHoliday } from './flyIndexAPI';
import { changeTripType } from "./flyIndexSlice";
import "./FlyIndex.scss";

const FlyIndex = () => {
  const [toggleType, setToggleType] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    getAirportList();
    getCalenderHoliday();
  }, []);

  const handleToggle = (e) => {
    console.log(e);
    setToggleType(e.type);
    dispatch(changeTripType(e.type))
  };

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

    </div>
  );
};

export default FlyIndex;
