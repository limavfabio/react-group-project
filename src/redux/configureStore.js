/* eslint-disable implicit-arrow-linebreak */

import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Missions/missionsReducer';
import rocketsReducer, { getRockets } from './rockets/rockets';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
});

store.dispatch(getRockets());

export default store;
