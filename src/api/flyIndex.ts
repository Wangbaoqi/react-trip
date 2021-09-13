import request from '@/utils/request'


export const getAirportList = (params) => request({
  url: '/flyIndex/getAirportList',
  data: params,
  method: 'get'
});