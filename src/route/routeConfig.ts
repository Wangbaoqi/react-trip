
import React, { lazy } from 'react'

import flightRoute from './flightRoute'


const defaultConf = [
  {
    path: '/register',
    component: lazy(() => import('@/views/register/RegisterView')),
  },
  {
    path: '/login',
    component: lazy(() => import('@/views/signIn/SigninView'))
  },
  {
    path: '/home',
    component: lazy(() => import('@/views/home/HomeView'))
  },
  {
    path: '/',
    component: lazy(() => import('@/views/home/HomeView'))
  }
]

const routesConf = [
  ...flightRoute,
  ...defaultConf
]
export default routesConf