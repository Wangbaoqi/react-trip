import { lazy } from "react"

const flightRoute = [
  {
    path: '/flight',
    component: lazy(() => import('@/views/airport/flyIndex/FlyIndex')),
    children: [
      {
        path: '/flight/book1',
        component: lazy(() => import('@/views/airport/book1/Book1'))
      }
    ]
  }
]

export default flightRoute