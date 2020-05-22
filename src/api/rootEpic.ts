import { combineEpics } from 'redux-observable';
import { updatePageStartEpic } from './epics/lifecycle';

export const rootEpic = combineEpics(
  updatePageStartEpic
);