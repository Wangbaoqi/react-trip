import request from '@/utils/request';
import { cacheGet, cacheSet } from '@/utils/cache';
import { 
  getAirportListLandAPI, 
  getInterAirportListHotAPI, 
  getInterAirportListIndexAPI,
  getInterAirportListOtherAPI,
  getCalenderHolidayAPI
} from '@/api/flyIndex';

const baseUrl = process.env.REACT_APP_BASE_URL




export const getAirportList = () => {

  const cityCacheData: string | null = cacheGet('AIRPORT_LIST_CITY_CACHE');

  if(!cityCacheData) {
    getAirportListLandAPI({}).then(async(res) => {
      console.log(res, 'airport list');
      const cityCacheData = {
        inland: {},
        inter: {}
      }
      cityCacheData.inland = res.data;
      const { data: { hl = []} } = await getInterAirportListHotAPI({})
      const { data: { pl = []} } = await getInterAirportListIndexAPI({})
      const { data: { rg = []} } = await getInterAirportListOtherAPI({})

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

export const getCalenderHoliday = () => {

  const holidayCacheData: string | null = cacheGet('HOLIDAY_DAY_CACHE');
  if(!holidayCacheData) {

    getCalenderHolidayAPI({}).then(res => {
      const holidayList = res.data?.list || '';
      cacheSet('HOLIDAY_DAY_CACHE', JSON.stringify(holidayList));

    })
  }

}