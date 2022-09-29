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
// console.log(store.dispatch(reserved(1)));

export default store;
