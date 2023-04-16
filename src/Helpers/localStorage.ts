function getLocalStorageValue(key: string) {
  const localValue = localStorage.getItem(key);
  if (localValue) {
    return JSON.parse(localValue);
  }
  return null;
}

function setLocalStorageValue(key: string, value: { [x: string]: any } = {}) {
  localStorage.setItem(key, JSON.stringify(value));
}


export { getLocalStorageValue, setLocalStorageValue }