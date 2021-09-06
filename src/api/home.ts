import request from '@/utils/request'


export const getCardList = (params) => request({
  url: '/home/getCardList',
  data: params,
  method: 'get'
});