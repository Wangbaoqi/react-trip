import React, { Fragment, useState, useEffect, Suspense } from "react";

import "./HomeView.scss";

import SearchPane from "@/components/searchPane/SearchPane";

import HomeNav from "@/components/homeNav/HomeNav";

import HomeCard from "@/components/homeCard/HomeCard";

import AdBanner from "@/components/adBanner/AdBanner";

import { getCardList } from '@/api/home'

import { homeBanner } from '@/assets/imgConf'


import { Button } from "react-vant";
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
