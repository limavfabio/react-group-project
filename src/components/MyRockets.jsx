import React from 'react';
import { useSelector } from 'react-redux';

const MyRockets = () => {
  const reservedRockets = useSelector((state) => state.rockets);
  reservedRockets.filter((rockets) => rockets.rocket_name);
  return (
    <div>
      <h1>My Rockets</h1>
      <div>
        {
          reservedRockets.map((rockets) => {
            if (rockets.reserved) {
              return (
                <div key={rockets.id}>
                  {rockets.rocket_name}
                </div>
              );
            }
            return '';
          })
        }
      </div>
    </div>
  );
};

export default MyRockets;
