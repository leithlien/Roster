import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Components/Home';
import Availabilities from './Components/Availabilities';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/:name/availabilities' element={<Availabilities />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
