import { lazy } from "react"

const testRoute = [
  {
    path: '/test/reactScroll',
    component: lazy(() => import('@/views/custom/ReactScroll')),
    
  }
]

export default testRoute