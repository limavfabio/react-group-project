import { configureStore } from '@reduxjs/toolkit';
// import rocketsReducer from './rockets/rockets';
import rocketsReducer, { getRockets } from './rockets/rockets';

// const rootReducer = combineReducers({
//   rocketsReducer,
// });

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

store.dispatch(getRockets());

export default store;
