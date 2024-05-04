import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import errorHandler from 'middleware-http-errors';


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
