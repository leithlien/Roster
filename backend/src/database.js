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
    employees: {}
  }
}

export { getData, setData, clearData };