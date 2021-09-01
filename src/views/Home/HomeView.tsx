import React, { Fragment, useState, useEffect, Suspense } from "react";

import "./HomeView.scss";

import SearchPane from "@/components/searchPane/SearchPane";

import HomeNav from "@/components/homeNav/HomeNav";

const Home = () => {

  
  

  return (
    <div className="home">
      {/* search */}
      <SearchPane />
      {/* home nav */}
      <HomeNav />
    </div>
  );
};

export default Home;
