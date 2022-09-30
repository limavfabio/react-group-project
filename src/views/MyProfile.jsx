import React from 'react';
import MyMissions from '../components/MyMissions';
import MyRockets from '../components/MyRockets';

function MyProfile() {
  return (
    <div className="d-flex">
      <MyMissions />
      <MyRockets />
    </div>
  );
}

export default MyProfile;
