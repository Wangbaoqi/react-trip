
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";

import { fetchCount } from "./counterAPI";

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed'
}



const initialState: CounterState = {
  value: 0,
  status: 'idle'
}


// async reducer
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

// countReducer

// * createSlice
// 1. 负责生成action类型字符串
// 2. 生成 action creator 函数
// 3. 生成 action 对象


// * Immer 不可变数据的库
// 

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
})

// export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;


// get state

export const selectCount = (state: RootState) => state.counter.value


export default counterSlice.reducer