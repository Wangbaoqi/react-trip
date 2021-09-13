

import classNames from 'classnames';
import { flyIndexCircle, flyIndexFly } from '@/assets/imgConf';

const FlyCardCity = ({
  handleChange,
  isExchange,
  handleCity
}) => {

  // const


  const startCls = classNames('fly-card__city-item', 'fly-card__city-start', 'font-24', 'text-left', {
    'fly-card__city--trans-left': isExchange
  })

  const endCls = classNames('fly-card__city-item', 'fly-card__city-end', 'font-24', 'text-right', {
    'fly-card__city--trans-right': isExchange
  })

  const iconCls = classNames({
    'fly-card__city-icon--trans': isExchange
  })

  return (
    <section className='fly-card__city'>
      <div className={startCls} onClick={() => handleCity('start')}>上海</div>
      <div className='fly-card__city-icon' onClick={handleChange}>
        <span className='fly-card__city-icon--circle'>
          <img className={iconCls} src={flyIndexCircle} alt="" />
        </span>
        <span className='fly-card__city-icon--fly'>
          <img src={flyIndexFly} alt="" />
        </span>
      </div>
      <div className={endCls} onClick={() => handleCity('end')}>北京</div>
    </section>
  )
}


export default FlyCardCity