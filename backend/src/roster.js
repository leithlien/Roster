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

  const newEmployee = {
    maxShifts: 0,
    availabilities: {}
  };

  days.forEach(d => {
    periods.forEach(p => {
      const periodName = `${d}-${p}`
      newEmployee.availabilities[periodName] = false;
    })
  });

  data.employees[name] = newEmployee;

  setData(data);
}

const setEmployeeAvailability = ( name, maxShifts, availabilities ) => {
  if (!name || name === '') {
    throw HTTPError(400, 'Invalid name')
  }

  const data = getData();

  data.employees[name].maxShifts = maxShifts;
  data.employees[name].availabilities = availabilities;

  setData(data);
}

const setShiftRequirements = ( requirements ) => {
  const data = getData();

  data.shiftRequirements = requirements;
  return;
}

export { getRoster, createNewEmployee, setEmployeeAvailability, setShiftRequirements };
