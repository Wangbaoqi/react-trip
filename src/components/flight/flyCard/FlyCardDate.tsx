
import UtilDate from '@/utils/dateFormat';
import { updateCityInfo, getFlyState } from '@/views/airport/flyIndex/flyIndexSlice';
import { useSelector } from 'react-redux';


const FlyCardDate = ({
  handleCalender
}) => {

  const flyState = useSelector(getFlyState);


  return (
    <section className='fly-card__date mt-25'>
      <div className='fly-card__date-item' onClick={() => handleCalender(0)}>
        <label className='fly-card_date-label font-22 font-w-700'>{UtilDate.format(flyState.dDate, 'MM月DD日')}</label>
        <label className='fly-card_date-tip font-14 ml-5'>{UtilDate.week(flyState.dDate)}</label>
      </div>
      {
        flyState.tripType == 1  
          ? <div className='fly-card__date-item' onClick={() => handleCalender(1)}>
              <label className='fly-card_date-label font-22 font-w-700'>{UtilDate.format(flyState.aDate, 'MM月DD日')}</label>
              <label className='fly-card_date-tip font-14 ml-5'>{UtilDate.week(flyState.aDate)}</label>
            </div> 
          : ''
      }
     
    </section>
  )
}


export default FlyCardDate