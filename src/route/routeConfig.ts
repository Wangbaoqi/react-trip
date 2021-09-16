
import React, { lazy } from 'react'

import flightRoute from './flightRoute';
import testRoute from './testRoute';


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
  ...testRoute,
  ...flightRoute,
  ...defaultConf
]
export default routesConf