import { useState, useEffect } from "react";
import { SearchPane, HomeNav, HomeCard, AdBanner } from '@/components'
import { getCardList } from '@/api/home'
import { homeBanner } from '@/assets/imgConf'
import "./HomeView.scss";

const Home = () => {
  const [cardList, setCardList] = useState([]);
  useEffect(() => {
    getCardList({}).then(res => {
      console.log(res);
      setCardList(res.data.item)
    })
  }, [])
  
  return (
    <div className="home">
      {/* search */}
      <SearchPane />
      {/* home nav */}
      <HomeNav />
      {/* home card */}
      <HomeCard cardList={cardList}/>
      {/* home banner */}
      <AdBanner url={homeBanner}/>
    </div>
  );
};

export default Home;
