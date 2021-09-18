import request from '@/utils/request';
import { cacheGet, cacheSet } from '@/utils/cache';


const baseUrl = process.env.REACT_APP_BASE_URL

const getAirportListLand = (params) => request({
  url: `${baseUrl}/flyIndex/getAirportList`,
  data: params,
  method: 'get'
});

const getInterAirportListHot = (params) => request({
  url: `${baseUrl}/flyIndex/getInterAirportListHot`,
  data: params,
  method: 'get'
});

const getInterAirportListIndex = (params) => request({
  url: `${baseUrl}/flyIndex/getInterAirportListIndex`,
  data: params,
  method: 'get'
});

const getInterAirportListOther = (params) => request({
  url: `${baseUrl}/flyIndex/getInterAirportListOther`,
  data: params,
  method: 'get'
});


export const getAirportList = () => {

  const cityCacheData: string | null = cacheGet('AIRPORT_LIST_CITY_CACHE');

  if(!cityCacheData) {
    getAirportListLand({}).then(async(res) => {
      console.log(res, 'airport list');
      const cityCacheData = {
        inland: {},
        inter: {}
      }
      cityCacheData.inland = res.data;
      const { data: { hl = []} } = await getInterAirportListHot({})
      const { data: { pl = []} } = await getInterAirportListIndex({})
      const { data: { rg = []} } = await getInterAirportListOther({})

      const historyHot = {
        rname: '历史/热门',
        areal: [
          {
            p: '当前/历史（国家、地区或城市',
            cl: []
          },{
            p: '热门',
            cl: hl
          }
        ]
      }
      const indexAZ = {
        rname: 'A-Z',
        areal: pl
      }
      rg.unshift(indexAZ);
      rg.unshift(historyHot);
      cityCacheData.inter = { hl, pl, rg }
      cacheSet('AIRPORT_LIST_CITY_CACHE', JSON.stringify(cityCacheData));
    }).catch(err => {
      console.log(err, 'getAirport fail');
    })
  }

  
}