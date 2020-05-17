import { createAction } from '@reduxjs/toolkit';

export interface CurrentDisplayState {
  page: string
  status: 'loading' | 'loaded' | 'error'
}

export const updatePage = createAction<CurrentDisplayState["page"]>('updatePage');

export const updateAppStatus = createAction<CurrentDisplayState["status"]>('updateAppStatus');