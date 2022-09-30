/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import style from '../styles/MyMissions.module.css';

const MyMissions = () => {
  const joinedMissions = useSelector((state) =>
    state.missions.filter((e) => e.reserved)
  );
  return (
    <div className={style.container}>
      <h1>My Missions</h1>
      <div className={style.missionsContainer}>
        {joinedMissions.map((mission) => (
          <div key={mission.mission_id} className={style.mission}>
            {mission.mission_name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyMissions;
