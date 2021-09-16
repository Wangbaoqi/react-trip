import request from '@/utils/request'


export const getAirportList = (params) => request({
  url: '/flyIndex/getAirportList',
  data: params,
  method: 'get'
});

export const getInterAirportList = (params) => request({
  url: '/flyIndex/getInterAirportList',
  data: params,
  method: 'get'
});