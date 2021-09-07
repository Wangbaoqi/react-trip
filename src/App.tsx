import React, { Suspense, useEffect } from 'react';


import { Switch, Route, Redirect } from 'react-router-dom'


import RouterView from '@/route/routerView'


import Layout from './components/layout/Layout';

const App = () => {
  

  useEffect(() => {

    const mediaQueryListDark = window.matchMedia('(prefers-color-scheme: dark)')

    window.document.documentElement.setAttribute(
      "data-theme",
      "default"
    );

    const handleChange = (mediaQueryListEvent) => {
      if (mediaQueryListEvent.matches) {
        // 用户切换到了暗色(dark)主题
        console.log('切换主题：', mediaQueryListDark.matches ? 'dark' : 'light');
        window.document.documentElement.setAttribute(
          "data-theme",
          "dark"
        );
      } else {
        // 用户切换到了亮色(light)主题
        console.log('切换主题：', mediaQueryListDark.matches ? 'dark' : 'light');
        window.document.documentElement.setAttribute(
          "data-theme",
          "default"
        );
      }
    }

    mediaQueryListDark.addListener(handleChange);
    return () => {
      mediaQueryListDark.removeListener(handleChange)
    }

  })
  
  return (
    <Layout className='container-scroll'>
      <RouterView />
    </Layout>
  );
}



export default App;
