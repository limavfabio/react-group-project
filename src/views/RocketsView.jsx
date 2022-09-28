/* eslint-disable import/no-named-as-default */
import React from 'react';
import { useSelector } from 'react-redux';
// import getRockets from '../app/rockets/rockets';

function RocketsView() {
  // const dispatch = useDispatch();
  const selectors = useSelector((state) => state.rockets);
  console.log('selector is ', selectors);
  // console.log(getRockets);
  return (
    <section>
      Rockets Component
      {
        selectors.map((eachRocket) => {
          console.log(eachRocket);

          return (
            <div key={eachRocket.id}>
              <img src={eachRocket.flickr_images} alt="Rocket" />
              <h1>{eachRocket.rocket_name}</h1>
              <p>{eachRocket.description}</p>
            </div>
          );
        })
      }
    </section>
  );
}

export default RocketsView;
