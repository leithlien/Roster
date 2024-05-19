import axios from 'axios';
import React from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [roster, setRoster] = React.useState(null);
  const [name, setName] = React.useState('');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const periods = ['early', 'mid', 'late']

  const fetchData = async () => {
    const data = await axios.get('http://localhost:3000/roster');
    setRoster(data.data);
  }

  React.useEffect(() => {
    fetchData();
  }, [])

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

  const solveRoster = async () => {
    const data = await axios.get('http://localhost:3000/roster/solve');
    fetchData();
  }

  const handleUserAvailabilities = (name) => {
    navigate(`/${name}/availabilities`);
  }

  const handleRequirements = () => {
    navigate('/setrequirements');
  }
  
  const abrev = (d) => {
    return d.substring(0, 3).toLowerCase();
  }

  return (
    <>
      {
        roster === null ? (
          <p>loading...</p>
        ) : (
          <>
            <Button variant="contained" onClick={handleAddEmployee}>Add Person</Button> &nbsp;
            <input value={name} onChange={handleNameChange} /> &nbsp;
            <Button variant="contained" onClick={handleRequirements}>Set Requirements</Button>
            <br />
            <div className='name-buttons'>
              {
                Object.keys(roster.employees).map(name => (
                  <Button key={name} variant="contained" onClick={() => { handleUserAvailabilities(name) }}>{name}</Button>
                ))
              }
            </div>
            <div className='roster-container'>
              <div className='roster-column'>
                Time
                <div className='roster-cell time-cell'>Early</div>
                <div className='roster-cell time-cell'>Mid</div>
                <div className='roster-cell time-cell'>Late</div>
              </div>
              {
                days.map(d => (
                  <div key={abrev(d)} className='roster-column'>
                    {d}
                    {
                      periods.map(p => (
                        <div key={p} className='roster-cell'>
                          { 
                            roster.roster[`${abrev(d)}-${p}`].map(n => (
                              <p key={n}>{n}</p>
                            ))
                          }
                        </div>
                      ))
                    }
                  </div>
                ))
              }
            </div>
            
            <Button variant="contained" onClick={solveRoster}>Solve</Button> <br /> <br />
            <Button variant="contained" onClick={handleReset}>Reset</Button>
          </>
        )
      }
      
    </>
  );
}

export default Home;
