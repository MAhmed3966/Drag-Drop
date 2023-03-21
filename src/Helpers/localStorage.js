function getLocalStorageValue(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setLocalStorageValue(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}


export {getLocalStorageValue, setLocalStorageValue}