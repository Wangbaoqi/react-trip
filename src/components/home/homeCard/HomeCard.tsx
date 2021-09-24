

import { Swipe } from 'react-vant';
import classNames from 'classnames';
import './HomeCard.scss';

const HomeCardSwiper = ({itemList}) => {

  return (
    <Swipe 
      pagination={{
        renderBullet: (className) => {
          return `<span class="home-card-swiper--bullet ${className}"></span>`;
        },
      }}
      className='home-card-swiper'
    >
      {
        itemList.map((im,id) => {
          return (
            <Swipe.Item key={id}>
              <section className='home-card-swiper__item'>
                {im.tag && im.tag.text ? <div className='home-card-swiper--tag'>{im.tag.text}</div> : ''}
                <img className='home-card-swiper--img' src={im.image}></img>
                <div className='home-card-swiper--mask'></div>
                <div className='home-card-swiper--product'>{im.title}</div>
              </section>
              <div className='home-card-swiper__bottom'>
                  {
                    im.price ? 
                    <div className='home-card-swiper__price'>
                      <span className='home-card-swiper__price--new'>￥{im.price}</span>
                      <span className='home-card-swiper__price--origin'>{im.originPrice}</span>
                      <span className='home-card-swiper__price--label'>{im.subTitle.text}</span>
                    </div> : 
                    <div className='home-card-swiper__title'>{im.title}</div>
                  }
                </div>
            </Swipe.Item>
          )
        })
      }
       
    </Swipe>
  )
}

const HomeCardTop = ({itemList}) => {
  return (
    <section className='home-card-rank'>
      {
        itemList.map((im,idx) => (
          <div className='home-card-rank__item' key={idx}>
            <div className='home-card-rank__top'>
              {im.tag ? <span className='home-card-rank__top--tag'>{im.tag.text}</span> : ''}
              <img className='home-card-rank__top--img' src={im.image} alt="" />
            </div>
            <p className='home-card-rank__bottom'>
              {im.title}
            </p>
          </div>
        ))
      }
    </section>
  )
}

const HomeCard = ({cardList}) => {
  return (
    <section className='home-card'>
      {
         cardList.map((im, id) => {
          
          return (
            <div className='home-card--row' key={id}>
              {
                im.items.map((ims, idx) => {
                  const cardTitleCls = classNames({
                    'home-card__title': true,
                    'home-card--rank': ims.blockType === 'rank'
                  })
                  return (
                    <div className='home-card__item' key={idx}>
                      <a className='home-card__header' href={ims.blockH5url}>
                        <img className='home-card__img' src={ims.blockTitleImage} alt="" />
                        <span className={cardTitleCls}>{ims.blockTitle}</span>
                      </a>
                      <section className='home-card__box'>
                        {
                          ims.blockType === 'rank' ? <HomeCardTop itemList={ims.items}/> : <HomeCardSwiper itemList={ims.items}/>
                        }
                        
                      </section>
                    </div>
                  )
                })
              }
            </div>
            
          )
        })
      }
    </section>
  )

}

export default HomeCard