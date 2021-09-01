
import React, { lazy } from 'react'


import Home from '@/views/home/HomeView'
import Login from '@/views/signIn/SigninView'
import Register from '@/views/register/RegisterView'

const routesConf = [
  
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/',
    component: Home
  }
  
  
]

export default routesConf