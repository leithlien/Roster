import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import axios from 'axios';

function Availabilities ({ setToggle, name }) {
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const periods = ['early', 'mid', 'late']
  const availabilities = {};

  const handleCheck = (d, p, e) => {
    const periodName = `${d}-${p}`;
    availabilities[periodName] = e.target.checked;
  }

  const confirm = async () => {
    const data = await axios.get('http://localhost:3000/roster');
    const user = data.data.employees[name];
    Object.entries(availabilities).map(([key, value]) => {
      user[key] = value;
    })

    await axios.put('http://localhost:3000/user/setavailability', 
      {
        name,
        availabilities: user
      }
    )
  }

  return (
    <>
      <div className='overlay'>
        <div className='overlay-container'>
          <div className='roster-container'>
            {
              days.map(d => (
                <div key={d} className='roster-column'>
                  {d}
                  {
                    periods.map(p => (
                      <Checkbox key={p} className='roster-cell' onClick={(e) => { handleCheck(d, p, e) }} />
                    ))
                  }
                </div>
              ))
            }
          </div>
        </div>
        <Button className='toggle-container' variant="contained" onClick={() => { setToggle(false) }}>Toggle</Button>
        <Button className='toggle-container' variant="contained" onClick={() => { confirm() }}>Confirm</Button>
      </div>
    </>
  )
}

export default Availabilities;
