import { getData, setData } from "./database.js"
import HTTPError from 'http-errors';

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const periods = ['early', 'mid', 'late']

const getRoster = () => {
  return getData();
}

const createNewEmployee = ( name ) => {
  if (!name || name === '') {
    throw HTTPError(400, 'Invalid name')
  }

  const data = getData();

  const newEmployee = {};

  days.forEach(d => {
    periods.forEach(p => {
      const periodName = `${d}-${p}`
      newEmployee[periodName] = false;
    })
  });

  data.employees[name] = newEmployee;

  setData(data);
}

const setEmployeeAvailability = ( name, availabilities ) => {
  if (!name || name === '') {
    throw HTTPError(400, 'Invalid name')
  }

  const data = getData();

  data.employees[name] = availabilities;

  setData(data);
}

const setShiftRequirements = ( requirements ) => {
  return;
}

export { getRoster, createNewEmployee, setEmployeeAvailability, setShiftRequirements };
