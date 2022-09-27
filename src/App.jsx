import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import './App.css';

function App() {
  return (
    <div className="header-container">
      <Header />
      <Routes>
        <Route path="/" element={<Missions />} />
        <Route path="/Rockets" element={<Rockets />} />
      </Routes>
    </div>
  );
}

export default App;