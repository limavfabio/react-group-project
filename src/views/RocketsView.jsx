/* eslint-disable no-confusing-arrow */
/* eslint-disable camelcase */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserved, cancelReservation } from '../redux/rockets/rockets';

function RocketsView() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const handleClick = (id) => {
    rockets.map((rocket) => rocket.id !== id
      ? dispatch(cancelReservation(rocket.id)) : dispatch(reserved(rocket.id)));
  };

  return (
    <section>
      {rockets.map((eachRocket) => {
        const {
          id,
          flickr_images,
          description,
          rocket_name,
          reserved
        } = eachRocket;
        return (
          <div className="eachRocket-Container" key={id}>
            <div className="rocket-image">
              <img src={flickr_images} alt="Rocket" />
            </div>
            <div className="name_description">
              <h1>{rocket_name}</h1>
              <p>
                {reserved && (
                  <span className="spans">Reserved</span>
                )}
                {description}
              </p>
              <button
                className={reserved ? 'cancel' : 'reserve'}
                type="button"
                onClick={() => handleClick(id)}
              >
                {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default RocketsView;
