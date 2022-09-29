/* eslint-disable import/no-named-as-default */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserved } from '../redux/rockets/rockets';

function RocketsView() {
  const dispatch = useDispatch();
  // const [rocket, setRocket] = useState(state);
  const selectors = useSelector((state) => state.rockets);
  const handleClick = (id) => {
    const newState = selectors.map((rocket) => {
      if (rocket.id !== id) {
        return rocket;
      }
      return { ...rocket, reserved: true };
    });

    // setRocket(() => ({
    //   ...rocket,
    //   newState,
    // }));
    dispatch(reserved(newState));
  };
  // console.log(rocket);

  return (
    <section>
      {selectors.map((eachRocket) => (
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
              onClick={() => handleClick(eachRocket.id)}
            >
              {eachRocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default RocketsView;
