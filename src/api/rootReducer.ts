import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router'
import { updateAppStatusReducer } from './reducers/lifecycle';

const rootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  currentDisplay: updateAppStatusReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;