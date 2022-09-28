import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MissionsView from './views/MissionsView';
import RocketsView from './views/RocketsView';
import MyProfile from './views/MyProfile';
import './App.css';

function App() {
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
