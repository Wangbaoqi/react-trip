
import Mock from 'mockjs';


import {
  getHomeCardList

} from './home';


Mock.setup({
  timeout: '200-600'
})

console.log('%c前端 mock 环境启动成功', 'color: #38f;font-weight: bold')



Mock.mock('/api/home/getCardList', 'get', getHomeCardList)


export default Mock;