import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import errorHandler from 'middleware-http-errors';

import { getRoster, createNewEmployee, setEmployeeAvailability } from './roster.js';
import { clearData } from './database.js';
import { solveFlow } from './flow.js';

// Set up web app
const app = express();
// Use middleware that allows us to access the JSON body of requests
app.use(json());
// Use middleware that allows for access from other domains
app.use(cors());

// handles errors nicely
app.use(errorHandler());

// for logging errors (print to terminal)
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;
const HOST = process.env.IP || 'localhost';

// start server
const server = app.listen(PORT, HOST, () => {
  // DO NOT CHANGE THIS LINE
  console.log(`⚡️ Server listening on port ${PORT} at ${HOST}`);
});

// For coverage, handle Ctrl+C gracefully
process.on('SIGINT', () => {
  server.close(() => console.log('Shutting down server gracefully.'));
});


app.get('/', (req, res) => {
  console.log('backend root request')
  res.send('hello world');
})

app.get('/test', (req, res) => {
  res.send('test route');
})

app.get('/roster', (req, res) => {
  return res.json(getRoster());
})

app.post('/roster/adduser', (req, res) => {
  const { name } = req.body;
  return res.json(createNewEmployee(name));
})

app.put('/user/setavailability', (req, res) => {
  const { name, availabilities } = req.body;
  return res.json(setEmployeeAvailability(name, availabilities));
})

app.delete('/reset', (req, res) => {
  return res.json(clearData());
})

app.get('/roster/solve', (req, res) => {
  return res.json(solveFlow());
})