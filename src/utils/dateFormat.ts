
import dayjs from "dayjs";



const UtilDate = {
  /**
   * 
   * @param date 
   * @param type YYYY-MM-DD
   * @returns 
   */
  format: (date, type) => {
    if(!type) return dayjs(new Date()).format();
    return dayjs(new Date(date)).format(type)
  },
  /**
   * 
   * @param date 
   * @param type day | week | month | quarter | year | hour | minute | second | millisecond
   */
  add: (date, type = 'day', value = 1) => {
    return dayjs(new Date(date)).add(value, type)
  },


  /**
   * 
   * @param date 
   * @returns 
   */
  week: (date) => {
    const monthDay = dayjs(new Date(date));
    const today = dayjs(new Date()).format('YYYY-MM-DD');
    const diffDay = monthDay.diff(today, 'day');
    const dayEnum = ['今天', '明天', '后天'];
    const weekEnum = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    if(diffDay > 2) {
      return weekEnum[monthDay.day()];
    }else {
      return dayEnum[diffDay];
    }
  },

  /**
   * 
   * @param date1 
   * @param date2 
   * @param type day | month | year
   * @returns 
   */
  isSame: (date1, date2, type) => {
    return dayjs(new Date(date1)).isSame(new Date(date2), type)
  }
}


export default UtilDate