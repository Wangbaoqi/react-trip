


// setItem
const cacheSet = (key, val) =>  {
  localStorage.setItem(key, val)
}

// eetItem
const cacheGet = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : ''
}
// removeItem

const remove = (key) => {
  localStorage.removeItem(key)
}

const clear = () => {
  localStorage.clear()
}

const hasKey = (key) => {

}

export { 
  cacheSet,
  cacheGet,
  remove,
  clear,
  hasKey
}