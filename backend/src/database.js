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
    'mon-early': 99,
    'mon-mid': 99,
    'mon-late': 99,
    'tue-early': 99,
    'tue-mid': 99,
    'tue-late': 99,
    'wed-early': 99,
    'wed-mid': 99,
    'wed-late': 99,
    'thu-early': 99,
    'thu-mid': 99,
    'thu-late': 99,
    'fri-early': 99,
    'fri-mid': 99,
    'fri-late': 99,
    'sat-early': 99,
    'sat-mid': 99,
    'sat-late': 99,
    'sun-early': 99,
    'sun-mid': 99,
    'sun-late': 99,
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
      'mon-early': 99,
      'mon-mid': 99,
      'mon-late': 99,
      'tue-early': 99,
      'tue-mid': 99,
      'tue-late': 99,
      'wed-early': 99,
      'wed-mid': 99,
      'wed-late': 99,
      'thu-early': 99,
      'thu-mid': 99,
      'thu-late': 99,
      'fri-early': 99,
      'fri-mid': 99,
      'fri-late': 99,
      'sat-early': 99,
      'sat-mid': 99,
      'sat-late': 99,
      'sun-early': 99,
      'sun-mid': 99,
      'sun-late': 99,
    }
  }
}

export { getData, setData, clearData };