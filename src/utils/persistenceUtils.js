const setItem = (key, item) => {
  localStorage.setItem(key, item)
}

const getItem = key => localStorage.getItem(key)
const deleteItem = key => localStorage.removeItem(key)

export { setItem, getItem, deleteItem }
