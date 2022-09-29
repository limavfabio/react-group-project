/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';

const MyMissions = () => {
  const joinedMissions = useSelector((state) =>
    state.missions.filter((e) => e.reserved)
  );
  return (
    <div>
      <h1>My Missions</h1>
      <div>
        {joinedMissions.map((mission) => (
          <div>{mission.mission_name}</div>
        ))}
      </div>
    </div>
  );
};

export default MyMissions;
