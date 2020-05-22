import { createAction } from '@reduxjs/toolkit';

export interface CurrentDisplayState {
  page: string
  status: 'loading' | 'loaded' | 'error'
}

export const updatePageStart = createAction<CurrentDisplayState["page"]>('updatePageStart');
export const updatePageComplete = createAction<CurrentDisplayState["page"]>('updatePageComplete');

export const updateAppStatus = createAction<CurrentDisplayState["status"]>('updateAppStatus');