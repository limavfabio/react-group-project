import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MissionsView from './components/MissionsView';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import './App.css';

function App() {
  return (
    <div className="header-container">
      <Header />
      <Routes>
        <Route path="/MissionsView" element={<MissionsView />} />
        <Route path="/" element={<Rockets />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
