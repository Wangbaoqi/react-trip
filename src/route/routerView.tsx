
import { Switch, Route } from 'react-router-dom'
import routesConf from './routeConfig';
const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} children={route.children} />
      )}
    >
    </Route>
  )
}

const RouterView = () => {
  return (
    <Switch>
      {
        routesConf.map((item, idx) => (
          <RouteWithSubRoutes key={idx} {...item} />
        ))
      }
    </Switch>
  )
}

export default RouterView