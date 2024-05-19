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
  shiftRequirements: {
    'mon-early': 1,
    'mon-mid': 1,
    'mon-late': 1,
    'tue-early': 1,
    'tue-mid': 1,
    'tue-late': 1,
    'wed-early': 1,
    'wed-mid': 1,
    'wed-late': 1,
    'thu-early': 1,
    'thu-mid': 1,
    'thu-late': 1,
    'fri-early': 1,
    'fri-mid': 1,
    'fri-late': 1,
    'sat-early': 1,
    'sat-mid': 1,
    'sat-late': 1,
    'sun-early': 1,
    'sun-mid': 1,
    'sun-late': 1,
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
      'mon-early': 1,
      'mon-mid': 1,
      'mon-late': 1,
      'tue-early': 1,
      'tue-mid': 1,
      'tue-late': 1,
      'wed-early': 1,
      'wed-mid': 1,
      'wed-late': 1,
      'thu-early': 1,
      'thu-mid': 1,
      'thu-late': 1,
      'fri-early': 1,
      'fri-mid': 1,
      'fri-late': 1,
      'sat-early': 1,
      'sat-mid': 1,
      'sat-late': 1,
      'sun-early': 1,
      'sun-mid': 1,
      'sun-late': 1,
    }
  }
}

export { getData, setData, clearData };