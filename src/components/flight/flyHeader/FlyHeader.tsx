


import './FlyHeader.scss';
import logo from "@/assets/logo1.png";

import classNames from 'classnames';

const FlyHeader = ({
  data,
  toggleType,
  handleToggle
}) => {


  return (
    <div className="fly-header">
      <img className="fly-header__logo" src={logo} alt="" />
      <div className="fly-header__toggle">
        {
          data.map((im, idx) => {
            const itemCls = classNames({
              'fly-header__toggle-item': true,
              'fly-header__toggle-item--active': im.type == toggleType
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
      <div className="fly-header__user">登录账号</div>
    </div>
  )
}


export default FlyHeader