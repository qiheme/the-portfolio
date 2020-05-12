import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CurrentDisplayState {
  page: string
  status: 'loading' | 'loaded' | 'error'
}

let initialState: CurrentDisplayState = {
  page: 'home',
  status: 'loading'
}

const currentDisplaySlice = createSlice({
  name: 'currentDisplay',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<string>) {
      state.page = action.payload
    },
  }
})

export const {
  setCurrentPage
} = currentDisplaySlice.actions

export default currentDisplaySlice.reducer