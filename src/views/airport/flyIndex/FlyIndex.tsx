import React, { Fragment, useState, useEffect, Suspense } from "react";

import "./FlyIndex.scss";

import classNames from "classnames";
import { Icon } from "react-vant";

import logo from "@/assets/logo1.png";

// import Menu from "@/components/menu/Meun";

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
    <div className="fly-index">
      <section className="fly-index__flight">
        <div className="fly-index__header">
          <img className="fly-index__logo" src={logo} alt="" />
          <div className="fly-index__toggle">
            {
              data.map((im, idx) => {
                const itemCls = classNames({
                  'fly-index__toggle-item': true,
                  'fly-index__toggle-item--active': im.type == toggleType
                })
                return (
                  <span
                    key={idx}
                    className={itemCls}
                    onClick={() => handleToggle(im)}
                  >
                    {im.value}
                  </span>
                )
              })
            }
          </div>
          <div className="fly-index__user">登录账号</div>
        </div>
        <div className="fly-index__card"></div>

        <div className="fly-index__history"></div>
      </section>
    </div>
  );
};

export default FlyIndex;
