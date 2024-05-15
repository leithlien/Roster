import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Availabilities () {
  const navigate = useNavigate();
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const periods = ['early', 'mid', 'late']
  let maxShifts = 0;
  const { name } = useParams();
  const [availabilities, setAvailabilities] = React.useState({});

  const handleChange = (e) => {
    maxShifts = e.target.value;
  }

  const confirm = async () => {
    const data = await axios.get('http://localhost:3000/roster');
    const user = data.data.employees[name];
    Object.entries(availabilities).map(([key, value]) => {
      user.availabilities[key] = value;
    })

    await axios.put('http://localhost:3000/user/setavailability', 
      {
        name,
        maxShifts: maxShifts,
        availabilities: user.availabilities,
      }
    )
  }

  const goHome = () => {
    navigate('/home');
  }

  const handleCheck = (d, p, e) => {
    setAvailabilities(prevState => ({
      ...prevState,
      [`${d}-${p}`]: !prevState[`${d}-${p}`] 
    }));
  }

  const alreadyChecked = (d, p) => {
    return availabilities[`${d}-${p}`];
  }

  return (
    <>
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
                        <Checkbox key={p} className='roster-cell' checked={alreadyChecked(d, p)} onClick={(e) => { handleCheck(d, p, e) }} />
                      ))
                    }
                  </div>
                ))
              }
            </div>
            <input className='max-shift-input' onChange={(e) => { handleChange(e) }}></input>
          </div>
        </div>
        <Button className='toggle-container' variant="contained" onClick={goHome}>Toggle</Button>
        <Button className='toggle-container' variant="contained" onClick={confirm}>Confirm</Button>
      </div>
    </>
  )
}

export default Availabilities;
