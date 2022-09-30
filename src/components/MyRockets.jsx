import React from 'react';
import { useSelector } from 'react-redux';
import style from '../styles/MyRockets.module.css';

const MyRockets = () => {
  const reservedRockets = useSelector((state) => state.rockets);
  reservedRockets.filter((rockets) => rockets.rocket_name);
  return (
    <div className={style.container}>
      <h1>My Rockets</h1>
      <div className={style.rocketsContainer}>
        {reservedRockets.map((rockets) => {
          if (rockets.reserved) {
            return (
              <div className={style.rocket} key={rockets.id}>
                {rockets.rocket_name}
              </div>
            );
          }
          return '';
        })}
      </div>
    </div>
  );
};

export default MyRockets;
