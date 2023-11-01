import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Registration from './Pages/Registration';
import Tickets from './Pages/Tickets';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  )
}