import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../global/store'

interface FeatureState {
  value: number,
}
const initialState: FeatureState = {
  value: 0
}

const slice = createSlice({
  name: 'feature',
  initialState,
  reducers: {
    placeholder: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  },
  // extraReducers(builder) {}
})

export { slice }
export const { placeholder } = slice.actions
export const selectValue = (state: RootState) => state.feature.value
export default slice.reducer