let data = {
  employees: {},
  roster: {
    'mon-early': [],
    'mon-mid': [],
    'mon-late': [],
    'tue-early': [],
    'tue-mid': [],
    'tue-late': [],
    'wed-early': [],
    'wed-mid': [],
    'wed-late': [],
    'thu-early': [],
    'thu-mid': [],
    'thu-late': [],
    'fri-early': [],
    'fri-mid': [],
    'fri-late': [],
    'sat-early': [],
    'sat-mid': [],
    'sat-late': [],
    'sun-early': [],
    'sun-mid': [],
    'sun-late': [],
  },
  setShiftRequirements: {
    'mon-early': 0,
    'mon-mid': 0,
    'mon-late': 0,
    'tue-early': 0,
    'tue-mid': 0,
    'tue-late': 0,
    'wed-early': 0,
    'wed-mid': 0,
    'wed-late': 0,
    'thu-early': 0,
    'thu-mid': 0,
    'thu-late': 0,
    'fri-early': 0,
    'fri-mid': 0,
    'fri-late': 0,
    'sat-early': 0,
    'sat-mid': 0,
    'sat-late': 0,
    'sun-early': 0,
    'sun-mid': 0,
    'sun-late': 0,
  }
}

const getData = () => {
  return data;
}

const setData = (newData) => {
  data = newData;
}

const clearData = () => {
  data = {
    employees: {},
    roster: {
      'mon-early': [],
      'mon-mid': [],
      'mon-late': [],
      'tue-early': [],
      'tue-mid': [],
      'tue-late': [],
      'wed-early': [],
      'wed-mid': [],
      'wed-late': [],
      'thu-early': [],
      'thu-mid': [],
      'thu-late': [],
      'fri-early': [],
      'fri-mid': [],
      'fri-late': [],
      'sat-early': [],
      'sat-mid': [],
      'sat-late': [],
      'sun-early': [],
      'sun-mid': [],
      'sun-late': [],
    },
    shiftRequirements: {
      'mon-early': 0,
      'mon-mid': 0,
      'mon-late': 0,
      'tue-early': 0,
      'tue-mid': 0,
      'tue-late': 0,
      'wed-early': 0,
      'wed-mid': 0,
      'wed-late': 0,
      'thu-early': 0,
      'thu-mid': 0,
      'thu-late': 0,
      'fri-early': 0,
      'fri-mid': 0,
      'fri-late': 0,
      'sat-early': 0,
      'sat-mid': 0,
      'sat-late': 0,
      'sun-early': 0,
      'sun-mid': 0,
      'sun-late': 0,
    }
  }
}

export { getData, setData, clearData };