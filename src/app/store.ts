import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import posterReducer from './features/poster/posterSlice';
import configReducer from './features/config/configSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    poster: posterReducer,
    config: configReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
