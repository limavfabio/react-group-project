/* eslint-disable implicit-arrow-linebreak */

import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import missionsReducer from './Missions/missionsReducer';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createLogger()),
});

export default store;
