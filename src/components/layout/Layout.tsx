

import classNames from 'classnames';
import './Layout.scss'

const Layout = (props) => {

  console.log(props);
  
  const layoutCls = classNames(props.className, {
    'layout': true,

  })
  return (
    <div className={layoutCls}>
      {props && props.children}
    </div>
  );
}



export default Layout;