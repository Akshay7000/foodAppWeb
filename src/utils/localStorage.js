const getLocalData = (key) => {
  if (key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  }
};

const saveLocalData = (key, value) => {
  if (key && value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export { getLocalData, saveLocalData };
