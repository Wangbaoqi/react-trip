//

import { Calendar, Popup, Button } from "react-vant";
import UtilDate from "@/utils/dateFormat";
import "./CalenderPrice.scss";
import { useState, useEffect } from "react";
import classNames from "classnames";
import { CalenderPriceProp } from "@/views/airport/flyIndex/PropTypes";

const CalenderPrice = ({
  visible,
  type,
  dateType,
  dDate,
  aDate,
  onConfirm,
  onClose,
  onChangeDate,
}) => {
  const gDate = new Date(dDate);
  const bDate = new Date(aDate);

  const [defaultDate, setDefaultDate] = useState(dateType ? bDate : gDate);
  const [goDate, setGoDate] = useState(gDate);
  const [backDate, setBackDate] = useState(bDate);
  const [dateTabType, setDateTabType] = useState(dateType);
  const [dateTip, setDateTip] = useState(false);
  const [confirmText, setConfirmText] = useState('确定');



  useEffect(() => {
    setGoDate(gDate);
    setBackDate(bDate);
    setDateTabType(dateType);
    setDefaultDate(dateType ? bDate : gDate)
  }, [visible]);


  const handelCheckDate = (type) => {
    setDateTabType(type);
    setDefaultDate(type ? backDate : goDate);

    if(type && goDate > backDate) {
      setDateTip(true)
    }
    
  };

  const handelSelectDate = (date) => {
    console.log(date, "date");
    setDateTip(false)

    // 返程
    if(dateTabType) {
      if(goDate > date) {
        setDateTip(true)
        setBackDate(new Date('1995-04-09'))
        setGoDate(date)

      }else {
        setBackDate(date)
      }
    }else {
      if(backDate < date) {
        setDateTip(true)
        setBackDate(new Date('1995-04-09'))
        setBackDate(date)
      }
      setGoDate(date)
    }
  };

  const handleConfirmDate = (date) => {
    console.log(date, "confirm date");

    if(goDate && backDate) {
      onConfirm && onConfirm({
        goDate: UtilDate.format(goDate, 'YYYY-MM-DD'), 
        backDate: UtilDate.format(backDate, 'YYYY-MM-DD')
      })
    }
    
  }

  const tabCls = (type) => {
    return classNames({
      "calender-title__item-inner": true,
      "calender-title__item--active": dateTabType == type,
    });
  }

 

  const title = (
    <section className="calender-title ph-15 mb-5 font-18 font-w-500">
      <p className="calender-title__top font-20 text-left">
        选择{dateTabType == 0 ? "去程" : "返程"}日期
      </p>
      {type ? (
        <div className="calender-title__bottom font-16">
          <div
            className="calender-title__item mr-40"
            onClick={() => handelCheckDate(0)}
          >
            <label htmlFor="go" className="font-12 font-w-400 mr-10">
              去程
            </label>
            <div
              id="go"
              className={tabCls(0)}
            >
              {UtilDate.format(goDate, "MM月DD日")} {UtilDate.week(goDate)}
            </div>
          </div>
          <div
            className="calender-title__item"
            onClick={() => handelCheckDate(1)}
          >
            <label htmlFor="back" className="font-12 font-w-400 mr-10">
              返程
            </label>
            <div
              id="back"
              className={tabCls(1)}
            >
              { dateTip ? '选择一个日期' : UtilDate.format(backDate, "MM月DD日") + UtilDate.week(backDate)}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );

  const footer = (
    <div className="calender-footer pv-10">
      <section className="calender-footer__box font-14 ph-10 mb-10">
        <div className="calender-footer__price">往返总价: --</div>
        <Button
          className="calender-footer__btn font-14"
          type="primary"
          text="确定"
          onClick={onConfirm}
        />
      </section>
      <p className="font-9">
        所选日期为出发地日期，价格变动频繁，以实际支付时的价格为准
      </p>
    </div>
  );
  return (
    <section className="calender-price">
      <Calendar
        className="calender-price"
        title={title}
        visible={visible}
        // type={type}
        defaultDate={defaultDate}
        // footer={footer}
        confirmText={confirmText}
        color="#0086f6"
        round={false}
        showMark={false}
        onSelect={handelSelectDate}
        onClose={onClose}
        onConfirm={handleConfirmDate}
      />
    </section>
  );
};

export default CalenderPrice;
