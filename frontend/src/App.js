import logo from './logo.svg';
import axios from 'axios';
import React from 'react';
import './App.css';

function App() {
  axios.get('http://localhost:3000/')
    .then(res => { console.log(res.data) });

  axios.get('http://localhost:3000/test')
    .then(res => { console.log(res.data) });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
