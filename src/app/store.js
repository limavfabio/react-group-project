import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer, { getRockets } from './rockets/rockets';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

store.dispatch(getRockets());

export default store;
