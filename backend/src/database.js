let data = {
  employees: {}
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