
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";

import { AirPortCityData } from '@/views/airport/flyIndex/PropTypes';
import { cacheGet, cacheSet } from '@/utils/cache';
import UtilDate from '@/utils/dateFormat'

// import { fetchCount } from "./counterAPI";

export interface FlyIndexState {
  aCode: string,
  aCttz: number,
  aDate: string,
  adult: number,
  aIsic: boolean,
  aName: string,
  aport: string,
  baby: number,
  child: number,
  dCode: string,
  dCttz: number,
  dDate: string,
  dIsic: boolean,
  dName: string,
  dPort: string,
  selectCabin: number,
  tripType: number,
}



const initialState: FlyIndexState = {
  aCode: "BJS",
  aCttz: 0,
  aDate: UtilDate.format(UtilDate.add(new Date(), 'day', 3), 'YYYY-MM-DD'),
  adult: 1,
  aIsic: false,
  aName: "北京",
  aport: "",
  baby: 0,
  child: 0,
  dCode: "SHA",
  dCttz: 0,
  dDate: UtilDate.format(UtilDate.add(new Date(), 'day', 1), 'YYYY-MM-DD'),
  dIsic: false,
  dName: "上海",
  dPort: "",
  selectCabin: 1,
  tripType: 0,
}


// async reducer
// export const getAirportCityAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async () => {
    
//   }
// );

// countReducer

// * createSlice
// 1. 负责生成action类型字符串
// 2. 生成 action creator 函数
// 3. 生成 action 对象


// * Immer 不可变数据的库
// 

export const flyIndexSlice = createSlice({
  name: 'flyIndex',
  initialState,
  reducers: {

    // change tripType 0-单程 1-往返
    changeTripType: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        tripType: action.payload
      }
    },

    updateCityInfo: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },

    updateCabinInfo: (state, action: PayloadAction<number>) => {
      state.selectCabin = action.payload
    },

    updateDateInfo: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },

  },
  extraReducers: (builder) => {
    
  },
})

// export actions
export const { changeTripType, updateCityInfo, updateCabinInfo, updateDateInfo } = flyIndexSlice.actions;


// get state

export const getFlyState = (state: RootState) => state.flyIndex


export default flyIndexSlice.reducer