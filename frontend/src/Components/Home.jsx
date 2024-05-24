import axios from 'axios';
import React from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import homeStyles from './Home.module.css';
import Roster from './Roster';

function Home() {
  const navigate = useNavigate();
  const [roster, setRoster] = React.useState(null);
  const [name, setName] = React.useState('');

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
  
  return (
    <>
      {
        roster === null ? (
          <p>loading...</p>
        ) : (
          <div className={homeStyles['page-container']}>

            <div className={homeStyles['button-container']}>
              <Button variant="contained" onClick={handleRequirements}>Set Requirements</Button>
            </div>

            <div className={homeStyles['button-container']}>
              <Button variant="contained" onClick={handleAddEmployee}>Add Person</Button> &nbsp;
              <input value={name} onChange={handleNameChange} placeholder='name'/>
            </div>
            
            <div className={homeStyles['button-container']}>
              {
                Object.keys(roster.employees).map(name => (
                  <Button className={homeStyles['name-buttons']} key={name} variant="contained" onClick={() => { handleUserAvailabilities(name) }}>{name}</Button>
                ))
              }
            </div>

            <Roster roster={roster} />
            
            <Button variant="contained" onClick={solveRoster}>Solve</Button> <br /> <br />
            <Button variant="contained" onClick={handleReset}>Reset</Button>
          </div>
        )
      }
      
    </>
  );
}

export default Home;
