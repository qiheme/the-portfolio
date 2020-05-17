import { combineReducers } from '@reduxjs/toolkit';
import { updateAppStatusReducer } from './reducers/lifecycle';

const rootReducer = combineReducers({
  currentDisplay: updateAppStatusReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer