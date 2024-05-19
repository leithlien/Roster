import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Requirements () {
  const navigate = useNavigate();
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const periods = ['early', 'mid', 'late']

  const [roster, setRoster] = React.useState(null);

  const fetchData = async () => {
    const data = await axios.get('http://localhost:3000/roster');
    setRoster(data.data);
  }

  React.useEffect(() => {
    fetchData();
  }, [])

  const goHome = () => {
    navigate('/home');
  }

  const alreadyInput = (d, p) => {
    return roster.shiftRequirements[`${d}-${p}`];
  }

  const handleChange = async (d, p, e) => {
    const newData = { ...roster }
    newData.shiftRequirements[`${d}-${p}`] = e.target.value;

    await axios.put('http://localhost:3000/roster/setrequirements', 
      {
        requirements: newData.shiftRequirements,
      }
    )
    fetchData();
  }

  return (
    <>
      {
        roster === null ? (
          <p>loading...</p>
        ) : (
          <div className='overlay'>
            <div className='overlay-container'>
              <div className='availabilities-container'>
                <div className='roster-container'>
                  {
                    days.map(d => (
                      <div key={d} className='roster-column'>
                        {d}
                        {
                          periods.map(p => (
                            <input key={p} className='roster-cell' value={alreadyInput(d, p)} onChange={(e) => { handleChange(d, p, e) }}></input>
                          ))
                        }
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <Button className='toggle-container' variant="contained" onClick={goHome}>Toggle</Button>
          </div>
        )
      }
      
    </>
  )
}

export default Requirements;
