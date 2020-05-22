import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import rootReducer from './rootReducer';
import { rootEpic } from './rootEpic';
export const history = createBrowserHistory();

type RootState = ReturnType<typeof rootReducer>
const epicMiddleware = createEpicMiddleware();
const store = configureStore({
  reducer: rootReducer(history),
  middleware: [
    // TODO: Get immutable and serializable checks working
    // ...getDefaultMiddleware<RootState>({thunk: false, immutableCheck: true, serializableCheck: true}), 
    epicMiddleware,
    routerMiddleware(history),
  ]
});
epicMiddleware.run(rootEpic);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  })
};

export type AppDispatch = typeof store.dispatch;

export default store;