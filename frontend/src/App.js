import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Components/Home';
import Availabilities from './Components/Availabilities';
import Requirements from './Components/Requirements';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/:name/availabilities' element={<Availabilities />} />
          <Route path='/setrequirements' element={<Requirements />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
