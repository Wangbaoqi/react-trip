






// 

import { Calendar, Popup, Button } from "react-vant";
import './CalenderPrice.scss';

const CalenderPrice = ({
  visible,
  onConfirm,
  onClose
}) => {

  const title = (
    <section className='calender-title ph-15 mb-5 font-18 font-w-500'>
      <p className='calender-title__top font-20 text-left'>选择去程日期</p>
      <div className='calender-title__bottom font-16'>
        <div className='calender-title__item mr-40'>
          <label htmlFor="go" className='font-12 font-w-400 mr-10'>去程</label>
          <div id='go' className='calender-title__item--active'>10月01 周四</div>
        </div>
        <div className='calender-title__item'>
          <label htmlFor="back" className='font-12 font-w-400 mr-10'>返程</label>
          <div id='back'>10月04 周四</div>
        </div>
      </div>
      
    </section>
  )

  const footer = (
    <div className='calender-footer pv-10'>
      <section className='calender-footer__box font-14 ph-10 mb-10'>
        <div className='calender-footer__price'>往返总价: --</div>
        <Button className='calender-footer__btn font-14' type='primary' text='确定' />
      </section>
      <p className='font-9'>所选日期为出发地日期，价格变动频繁，以实际支付时的价格为准</p>
    </div>
  )
  return (
    <section className='calender-price' >
      <Calendar 
        className='calender-price'
        title={title}
        visible={visible} 
        onConfirm={onConfirm} 
        color='#0086f6' 
        round={false}
        showMark={false}
        onClose={onClose}
        footer={footer}
      />
    </section>
  )
}


export default CalenderPrice