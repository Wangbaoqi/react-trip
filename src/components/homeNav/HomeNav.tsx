import { Link, LinkProps,  } from 'react-router-dom'

import classNames from 'classnames';
import './HomeNav.scss';

import { Swipe } from 'react-vant';

import { cardConf, cardSubConf } from './index';
import { RefAttributes } from 'react';


interface CardItem {
  type: string,
  subType?; string,
  path?: any,
  title: string
}

interface CardItemProps {
  item: CardItem,
  row?: string
}
const NavCardItem = ({item, row}:CardItemProps) => {

  const classNameItem = classNames({
    'navCard__item': true,
    'navCardRow__item': row,
    [`navCard__${item.type}`]: item.type
  })

  const classNameIcon = classNames({
    'navCard__item--icon': true,
    'navCardRow__item--icon': row,
    [`navCard__item--${item.subType}`]: true
  })

  return (
    <li className={classNameItem}>
      <Link to={item.path} className='nav'>
        <span className={classNameIcon}></span>
        <span className=''>{item.title}</span>
      </Link>
    </li>
  )
}

const NavCard = ({cardConf, row}) => {

  const cardCls = classNames({
    'navCard': true,
    'navCardRow': row
  })
  const colCls = classNames({
    'navCard__col': true,
    'navCardRow__row': row
  })

  return (
    <section className={cardCls}>
      {
        cardConf.map((im, idx) => (
          <ul className={colCls} key={idx}>
            {
              im.map((em, id) => (
                <NavCardItem key={id} item={em} row={row}/>
              ))
            }
          </ul>
        ))
      }
    </section>
  )
}


const HomeNav = () => {

  return (
    <section className='homeNav'>
      <Swipe 
        className="homeNav__swipe" 
        autoHeight={true}
        spaceBetween={20}
        pagination={{
          renderBullet: (index, className) => {
            return `<span class="homeNav__swipe--bullet ${className}"></span>`;
          },
        }}
      >
        <Swipe.Item>
          <NavCard cardConf={cardConf} row={false}/>
        </Swipe.Item>
        <Swipe.Item>
          <NavCard cardConf={cardSubConf} row={true}/>
        </Swipe.Item>
      </Swipe>
    </section>
  )
}

export default HomeNav