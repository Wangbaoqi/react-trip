

import { Popup, Icon } from "react-vant";
import classNames from "classnames";
import './CabinSelect.scss';


const CabinSelect = ({
  visible,
  checkedId,
  cabinList,
  selectCabin,
  closeCabin
}) => {
  return (
    <Popup visible={visible} closeable  style={{ height: "30%" }} title="选择舱位" position="bottom" round onClose={closeCabin}>
      <section className='select-cabin pv-20 mh-20'>
        {
          cabinList.map((im, idx) => {
            const cls = classNames('font-16', 'pv-14', {
              'select-cabin__item': true,
              'select-cabin__item--select': idx === checkedId
            })
            return (
              <div className={cls} key={idx} onClick={() => selectCabin(idx)}>
                <span>{im}</span>
                { idx === checkedId ? <Icon name="success" size="20"/> : ''}
              </div>
            )
          })
        }
      </section>
    </Popup>
  ) 
}

export default CabinSelect