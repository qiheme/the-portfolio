import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { updatePageStart, updatePageComplete } from '../actions/lifecycle';
import { push } from 'connected-react-router'


export const updatePageStartEpic = (action$: any) => action$.pipe(
  ofType(updatePageStart),
  map((action: any) => {
    return push(`/`);
    // return updatePageComplete(action.payload)
  })
);