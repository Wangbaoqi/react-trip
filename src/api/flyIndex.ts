import request from '@/utils/request'

const baseUrl = process.env.REACT_APP_BASE_URL

export const getAirportListLandAPI = (params) => request({
  url: `${baseUrl}/flyIndex/getAirportList`,
  data: params,
  method: 'get'
});

export const getInterAirportListHotAPI = (params) => request({
  url: `${baseUrl}/flyIndex/getInterAirportListHot`,
  data: params,
  method: 'get'
});

export const getInterAirportListIndexAPI = (params) => request({
  url: `${baseUrl}/flyIndex/getInterAirportListIndex`,
  data: params,
  method: 'get'
});

export const getInterAirportListOtherAPI = (params) => request({
  url: `${baseUrl}/flyIndex/getInterAirportListOther`,
  data: params,
  method: 'get'
});
export const getCalenderHolidayAPI = (params) => request({
  url: `${baseUrl}/flyIndex/getCalenderHoliday`,
  data: params,
  method: 'get'
});
