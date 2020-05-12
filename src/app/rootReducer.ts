import { combineReducers } from '@reduxjs/toolkit';
import currentDisplayReducer from './slices/lifecycleSlice';

const rootReducer = combineReducers({
  currentDisplay: currentDisplayReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer