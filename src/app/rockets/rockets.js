/* eslint-disable camelcase */
import axios from 'axios';

// Action Types
const GET_ROCKETS = 'react-group-project/rockets/GET_ROCKETS';
const baseURL = 'https://api.spacexdata.com/v3/rockets';
const rockets = [];

const fetchRocket = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

export const getRockets = () => async (dispatch) => {
  const rockets = await axios.get(baseURL);
  // console.log('Axios ', await axios.get(baseURL));
  const rocketArr = Object.entries(rockets.data).map((item) => {
    const {
      id, rocket_name, description, flickr_images
    } = item[1];
    // console.log(item[0]);
    // console.log(item[1].id);
    // console.log(rocket_name, description);
    return {
      id,
      rocket_name,
      description,
      flickr_images
    };
  });
  dispatch(fetchRocket(rocketArr));
};

// Rockets Reducer
function rocketsReducer(state = rockets, action) {
//   console.log(state);
//   console.log(action);

  switch (action.type) {
    case (GET_ROCKETS):
      return action.payload;
    default:
      return state;
  }
}

export default rocketsReducer;
