import axios from 'axios';
import React from 'react';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  const [roster, setRoster] = React.useState({});

  React.useEffect(() => {
    const fetchData = async () => {
      const roster = await axios.get('http://localhost:3000/roster');
      setRoster(roster.data);
    }
    fetchData();
  }, [])

  React.useEffect(() => {
    console.log(roster);
  }, [roster])

  const handleAddEmployee = async () => {
    await axios.post('http://localhost:3000/roster/adduser',
      {
        name: 'john'
      }
    )
  }

  return (
    <>
      <Button variant="contained" onClick={handleAddEmployee}>Add Person</Button>
      {
        Object.keys(roster).length !== 0 && (
          Object.entries(roster.employees).forEach(([user, days]) => {
            <>
              <p><b>{user}</b></p> <br />
            </>
            Object.entries(days).forEach(([day, periods]) => {
              Object.entries(periods).forEach(([period, val]) => {
                {
                  val && (
                    <>
                      {day} {period} <br />
                    </>
                  )
                }
              })
            })
          })
        )
      }
    </>
  );
}

export default App;
