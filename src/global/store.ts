import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import featureReducer from '../features/feature/slice'

export const store = configureStore({
  reducer: {
    feature: featureReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>