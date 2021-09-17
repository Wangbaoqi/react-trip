import request from '@/utils/request';

const baseUrl = process.env.REACT_APP_BASE_URL


export const getCardList = (params) => request({
  url: `${baseUrl}/home/getCardList`,
  data: params,
  method: 'get'
});