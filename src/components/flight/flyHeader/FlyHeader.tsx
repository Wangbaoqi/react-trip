


import './FlyHeader.scss';
import logo from "@/assets/logo1.png";

import classNames from 'classnames';

const FlyHeader = ({
  data,
  toggleType,
  handleToggle
}) => {

  const activeVal = data.filter(e => e.type == toggleType)[0].value;
  const activeCls = classNames({
    'fly-header__toggle-item--active': true,
    'fly-header__toggle-item--trans': toggleType == 1,
  })


  return (
    <div className="fly-header">
      <img className="fly-header__logo" src={logo} alt="" />
      <div className="fly-header__box">
        <div className="fly-header__toggle">
          {
            data.map((im, idx) => (
              <span
                key={idx}
                // className={itemCls}
                className='fly-header__toggle-item'
                onClick={() => handleToggle(im)}
              >
                {im.value}
              </span>
            ))
          }
          <span className={activeCls}>{activeVal}</span>
        </div>
      </div>
      
      <div className="fly-header__user">登录账号</div>
    </div>
  )
}


export default FlyHeader