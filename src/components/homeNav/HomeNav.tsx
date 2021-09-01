



import './HomeNav.scss'

import { Swipe } from 'react-vant';



const HomeNav = () => {

  return (
    <section className='homeNav'>
      <div className=''></div>

      <Swipe className="my-swipe" autoplay={3000}>
        <Swipe.Item>1</Swipe.Item>
        <Swipe.Item>2</Swipe.Item>
        <Swipe.Item>3</Swipe.Item>
        <Swipe.Item>4</Swipe.Item>
      </Swipe>
    </section>
  )
}

export default HomeNav