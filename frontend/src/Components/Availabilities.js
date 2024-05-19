import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Availabilities () {
  const navigate = useNavigate();
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const periods = ['early', 'mid', 'late']
  const { name } = useParams();
  const [roster, setRoster] = React.useState(null);
  const [maxShifts, setMaxShifts] = React.useState(null);
  
  const fetchData = async () => {
    const data = await axios.get('http://localhost:3000/roster');
    setRoster(data.data);
    setMaxShifts(data.data.employees[name].maxShifts);
  }

  React.useEffect(() => {
    fetchData();
  }, [])

  const handleChange = async (e) => {
    await axios.put('http://localhost:3000/user/setavailability', 
      {
        name,
        maxShifts: e.target.value,
        availabilities: roster.employees[name].availabilities,
      }
    )
    fetchData();
  }

  const goHome = () => {
    navigate('/home');
  }

  const handleCheck = async (d, p, e) => {
    const newData = { ...roster };
    newData.employees[name].availabilities[`${d}-${p}`] = !alreadyChecked(d, p);

    await axios.put('http://localhost:3000/user/setavailability', 
      {
        name,
        maxShifts: maxShifts,
        availabilities: newData.employees[name].availabilities,
      }
    )
    fetchData();
    e.target.checked = !e.target.checked;
  }

  const alreadyChecked = (d, p) => {
    return roster.employees[name].availabilities[`${d}-${p}`]
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
                            <Checkbox key={p} className='roster-cell' checked={alreadyChecked(d, p)} onClick={(e) => { handleCheck(d, p, e) }} />
                          ))
                        }
                      </div>
                    ))
                  }
                </div>
                <input className='max-shift-input' value={maxShifts} onChange={(e) => { handleChange(e) }}></input>
              </div>
            </div>
            <Button className='toggle-container' variant="contained" onClick={goHome}>Toggle</Button>
          </div>
        )
      }
      
    </>
  )
}

export default Availabilities;
