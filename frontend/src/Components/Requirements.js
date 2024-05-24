import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import overlayStyles from './Overlay.module.css';
import rosterStyles from './Roster.module.css';

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
          <div className={overlayStyles['overlay']}>
            <div className={overlayStyles['overlay-container']}>
              <div className={overlayStyles['availabilities-container']}>
                <div className={rosterStyles['roster-container']}>
                  {
                    days.map(d => (
                      <div key={d} className={rosterStyles['roster-column']}>
                        {d}
                        {
                          periods.map(p => (
                            <input key={p} className={rosterStyles['roster-cell']} value={alreadyInput(d, p)} onChange={(e) => { handleChange(d, p, e) }}></input>
                          ))
                        }
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <Button className={overlayStyles['toggle-container']} variant="contained" onClick={goHome}>Toggle</Button>
          </div>
        )
      }
      
    </>
  )
}

export default Requirements;
