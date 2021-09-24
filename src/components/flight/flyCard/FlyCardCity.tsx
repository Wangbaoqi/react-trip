import classNames from 'classnames';
import { flyIndexCircle, flyIndexFly } from '@/assets/imgConf';
import { getFlyState } from '@/views/airport/flyIndex/flyIndexSlice';
import { useSelector } from 'react-redux';

const FlyCardCity = ({
  handleChange,
  isExchange,
  handleCity
}) => {

  const flyState = useSelector(getFlyState);
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
      <div className={startCls} onClick={() => handleCity(0)}>{flyState.dName}</div>
      <div className='fly-card__city-icon' onClick={handleChange}>
        <span className='fly-card__city-icon--circle'>
          <img className={iconCls} src={flyIndexCircle} alt="" />
        </span>
        <span className='fly-card__city-icon--fly'>
          <img src={flyIndexFly} alt="" />
        </span>
      </div>
      <div className={endCls} onClick={() => handleCity(1)}>{flyState.aName}</div>
    </section>
  )
}


export default FlyCardCity