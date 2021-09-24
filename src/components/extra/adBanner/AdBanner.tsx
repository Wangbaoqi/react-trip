

import './AdBanner.scss';


const AdBanner = ({url}) => {


  return (
    <section className='ad-banner'>
      <a href="https://contents.ctrip.com/activitysetupapp/mkt/index/919zhuhuichang?popup=close&pushcode=h5">
        <img className='ad-banner__img' src={url} />
      </a>
    </section>
  )
}


export default AdBanner