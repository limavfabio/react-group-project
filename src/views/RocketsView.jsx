/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserved } from '../app/rockets/rockets';
// import getRockets from '../app/rockets/rockets';

const state = {
  id: '',
  rocket_name: '',
  description: '',
  flickr_images: '',
};

function RocketsView() {
  const dispatch = useDispatch();
  const [rocket, setRocket] = useState(state);
  const selectors = useSelector((state) => state.rockets);
  // selectors.map((selector) => console.log(selector.id));
  // console.log(selectors);
  const handleClick = (id) => {
    // console.log('Reserved with id number ', id, ' clicked');
    const newState = selectors.map((rocket) => {
      if (rocket.id !== id) {
        return rocket;
      }
      return { ...rocket, reserved: true };
    });

    setRocket(() => ({
      ...rocket, newState
    }));
    // dispatch(reserved(newState));
  };

  return (
    <section>
      {
        selectors.map((eachRocket) => {
          console.log(eachRocket.flickr_images[0]);

          return (
            <div className="eachRocket-Container" key={eachRocket.id}>
              <div className="rocket-image">
                <img src={eachRocket.flickr_images[0]} alt="Rocket" />
              </div>
              <div className="name_description">
                <h1>{eachRocket.rocket_name}</h1>
                <p>{eachRocket.description}</p>
                <button
                  className="btn"
                  type="button"
                  onClick={() => dispatch(reserved(handleClick(eachRocket.id)))}
                >
                  Reserve Rocket
                </button>
              </div>
            </div>
          );
        })
      }
    </section>
  );
}

export default RocketsView;
