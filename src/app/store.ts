import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import reducer from './reducer';

export const store = configureStore({
  reducer: reducer
});




// 全局store 类型

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>