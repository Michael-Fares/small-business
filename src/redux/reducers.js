
import { combineReducers } from 'redux'

const user = (state = null, action) => {
  switch (action.type) {
    case "HANDLE_LOGIN":
      const user = {
        
      }
      
    default:
      return state;
  }
  
}

// starting with add listing action
const listings = (state = [], action) => {
  switch(action.type) {
    case "ADD_LISTING":
      return [...state, action.value]
    case "REMOVE_LISTING":
      let copy = [...state]
      copy.splice(action.value, 1)
      return copy
  default: 
    return state
  }
}

export default combineReducers({ user, listings })