import React, { Fragment, useState, useEffect, Suspense } from "react";

import "./HomeView.scss";

import Menu from "@/components/menu/Meun";

const FlyIndex = () => {
  const [toggleType, setToggleType] = useState(0);

  const handleToggle = (e) => {
    console.log(e);
    setToggleType(e.type);
  };

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
    <div className="home">
      <section className="home__flight">
        <div className="flight__card">
          <div className="flightToggle">
            {data.map((item, idx) => (
              <span
                key={idx}
                className={
                  toggleType == item.type ? "toggleItemCurrent" : "toggleItem"
                }
                onClick={() => handleToggle(item)}
              >
                {item.value}
              </span>
            ))}
          </div>
          <div className="userIcon"></div>
        </div>
      </section>
    </div>
  );
};

export default FlyIndex;
