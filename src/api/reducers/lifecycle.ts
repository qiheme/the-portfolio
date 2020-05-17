import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { CurrentDisplayState, updateAppStatus, updatePage } from '../actions/lifecycle';

let initialState: CurrentDisplayState = {
  page: 'home',
  status: 'loading'
};

export const updateAppStatusReducer = createReducer(initialState, builder => {
  return builder
    .addCase(updateAppStatus, (state, action) => {
      return {...state, status: action.payload }
    })
    .addCase(updatePage, (state, action: PayloadAction<string>) => {
      return {...state, page: action.payload }
    })
  } 
)