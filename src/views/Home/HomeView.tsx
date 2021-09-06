import React, { Fragment, useState, useEffect, Suspense } from "react";

import "./HomeView.scss";

import SearchPane from "@/components/searchPane/SearchPane";

import HomeNav from "@/components/homeNav/HomeNav";

import HomeCard from "@/components/homeCard/HomeCard";

import { getCardList } from '@/api/home'


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

      <HomeCard cardList={cardList}/>
    </div>
  );
};

export default Home;
