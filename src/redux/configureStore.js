/* eslint-disable implicit-arrow-linebreak */

import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import missionsReducer from './Missions/missionsReducer';
import rocketsReducer, { getRockets } from './rockets/rockets';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createLogger()),
});

store.dispatch(getRockets());

export default store;
