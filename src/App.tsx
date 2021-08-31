import React, { Suspense, useEffect } from 'react';


import { Switch, Route, Redirect } from 'react-router-dom'


import RouterView from '@/route/routerView'




const App = () => {
  

  useEffect(() => {

    const mediaQueryListDark = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (mediaQueryListEvent) => {
      if (mediaQueryListEvent.matches) {
        // 用户切换到了暗色(dark)主题
        console.log('切换主题：', mediaQueryListDark.matches ? 'dark' : 'light');
        
      } else {
        // 用户切换到了亮色(light)主题
        console.log('切换主题：', mediaQueryListDark.matches ? 'dark' : 'light');
      }
    }

    mediaQueryListDark.addListener(handleChange);
    return () => {
      mediaQueryListDark.removeListener(handleChange)
    }

  })
  
  return (
    <div className='container'>

        <RouterView />
    </div>
  );
}



export default App;
