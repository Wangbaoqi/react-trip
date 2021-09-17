import request from '@/utils/request'

const baseUrl = process.env.REACT_APP_BASE_URL

export const getAirportList = (params) => request({
  url: `${baseUrl}/flyIndex/getAirportList`,
  data: params,
  method: 'get'
});

export const getInterAirportListHot = (params) => request({
  url: `${baseUrl}/flyIndex/getInterAirportListHot`,
  data: params,
  method: 'get'
});

export const getInterAirportListIndex = (params) => request({
  url: `${baseUrl}/flyIndex/getInterAirportListIndex`,
  data: params,
  method: 'get'
});

export const getInterAirportListOther = (params) => request({
  url: `${baseUrl}/flyIndex/getInterAirportListOther`,
  data: params,
  method: 'get'
});

