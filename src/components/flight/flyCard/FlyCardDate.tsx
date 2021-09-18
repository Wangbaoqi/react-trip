
import { updateCityInfo, getFlyState } from '@/views/airport/flyIndex/flyIndexSlice';
import { useSelector } from 'react-redux';


const FlyCardDate = ({
  handleCalender
}) => {

  const flyState = useSelector(getFlyState);


  return (
    <section className='fly-card__date mt-25'>
      <div className='fly-card__date-item' onClick={() => handleCalender(0)}>
        <label className='fly-card_date-label font-22 font-w-700'>{flyState.dDate}</label>
        <label className='fly-card_date-tip font-14'>今天</label>
      </div>
      {
        flyState.tripType == 1  
          ? <div className='fly-card__date-item' onClick={() => handleCalender(1)}>
              <label className='fly-card_date-label font-22 font-w-700'>{flyState.aDate}</label>
              <label className='fly-card_date-tip font-14'>今天</label>
            </div> 
          : ''
      }
     
    </section>
  )
}


export default FlyCardDate