import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { showMissions } from './redux/Missions/missionsReducer';
import RocketsView from './views/RocketsView';
import MyProfile from './views/MyProfile';
import MissionsView from './views/MissionsView';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showMissions());
  }, []);

  return (
    <div className="header-container">
      <Header />
      <Routes>
        <Route path="/MissionsView" element={<MissionsView />} />
        <Route path="/" element={<RocketsView />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
