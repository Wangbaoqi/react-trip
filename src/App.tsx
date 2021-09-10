import React, { Suspense, useEffect } from 'react';


import { Switch, Route, Redirect } from 'react-router-dom'


import RouterView from '@/route/routerView'


import Layout from './components/layout/Layout';



function setRem () {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 750
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = (32 * Math.min(scale, 2)) + 'px'
}

window.onresize = function () {
  setRem()
  console.log('size');
  
}

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
