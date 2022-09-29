/* eslint-disable camelcase */
import axios from 'axios';

// Action Types
const GET_ROCKETS = 'react-group-project/rockets/GET_ROCKETS';
const RESERVED = 'react-group-project/rockets/RESERVED';
const CANCEL_RESERVATION = 'react-group-project/rockets/CANCEL_RESERVATION';
const baseURL = 'https://api.spacexdata.com/v3/rockets';
const rockets = [];

const fetchRocket = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

export const getRockets = () => async (dispatch) => {
  const rockets = await axios.get(baseURL);
  const rocketArr = Object.entries(rockets.data).map((item) => {
    const {
      id, rocket_name, description, flickr_images
    } = item[1];
    return {
      id,
      rocket_name,
      description,
      flickr_images,
      reserved: false,
    };
  });
  dispatch(fetchRocket(rocketArr));
};

// Reserve Action
export const reserved = (payload) => ({
  type: RESERVED,
  payload,
});

export const cancelReservation = (payload) => ({
  type: CANCEL_RESERVATION,
  payload,
});

// Rockets Reducer
const rocketsReducer = (state = rockets, action) => {
  switch (action.type) {
    case (GET_ROCKETS):
      return action.payload;
    case (RESERVED):
      return [...state.map((rockets) => {
        if (rockets.id === action.payload) {
          return { ...rockets, reserved: true };
        }
        return rockets;
      })];
    case (CANCEL_RESERVATION):
      return [...state.map((rockets) => {
        if (rockets.id === action.payload) {
          return { ...rockets, reserved: false };
        }
        return rockets;
      })];
    default:
      return state;
  }
};

export default rocketsReducer;
