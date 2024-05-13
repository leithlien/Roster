import axios from 'axios';
import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Availabilities from './Availabilities';

function App() {
  const [roster, setRoster] = React.useState(null);
  const [name, setName] = React.useState('');
  const [toggleAvailabilities, setToggle] = React.useState(false);

  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const periods = ['early', 'mid', 'late']

  const fetchData = async () => {
    const data = await axios.get('http://localhost:3000/roster');
    setRoster(data.data);
  }

  React.useEffect(() => {
    fetchData();
  }, [toggleAvailabilities])

  React.useEffect(() => {
    console.log(roster);
  }, [roster])

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleAddEmployee = async () => {
    const data = await axios.post('http://localhost:3000/roster/adduser',
      {
        name: name
      }
    )
    fetchData();
  }

  const handleReset = async () => {
    const data = await axios.delete('http://localhost:3000/reset')
    fetchData();
  }

  const handleToggleAvailabilities = (name) => {
    console.log('toggle')
    setName(name);
    setToggle(!toggleAvailabilities);
  }

  const solveRoster = async () => {
    const data = await axios.get('http://localhost:3000/roster/solve');
    fetchData();
  }

  return (
    <>
      {
        roster === null ? (
          <p>loading...</p>
        ) : (
          <>
            <Button variant="contained" onClick={handleAddEmployee}>Add Person</Button>
            <input value={name} onChange={handleNameChange} /> <br />
            <Button variant="contained" onClick={handleReset}>Reset</Button>
            <div className='name-buttons'>
              {
                Object.keys(roster.employees).map(name => (
                  <Button key={name} variant="contained" onClick={() => { handleToggleAvailabilities(name) }}>{name}</Button>
                ))
              }
            </div>
            <div className='roster-container'>
              {
                days.map(d => (
                  <div key={d} className='roster-column'>
                    {d}
                    {
                      periods.map(p => (
                        <div key={p} className='roster-cell'>
                          {`${d}-${p}`}
                          {/* name rendering */}
                          { 
                            Object.keys(roster.employees).map(name => (
                              roster.employees[name][`${d}-${p}`] && (
                                <p key={name}>{name}</p>
                              )
                            ))
                          }
                        </div>
                      ))
                    }
                  </div>
                ))
              }
            </div>
            
            <Button variant="contained" onClick={solveRoster}>Solve</Button>
            {
              toggleAvailabilities && (
                <>
                  <Availabilities setToggle={setToggle} name={name} />
                </>
              )
            }
          </>
        )
      }
      
    </>
  );
}

export default App;
