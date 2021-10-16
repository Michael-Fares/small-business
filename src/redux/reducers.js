
import { combineReducers } from 'redux'

const user = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      console.log("login")
      document.cookie = "loggedIn=true"
      window.location.replace("/")
      user = {
        username: "user",
        loggedIn: true
      }
      return user;
    case "LOGOUT_USER":
      document.cookie = "loggedIn="
      window.location.replace("/")
      user = {}
      return user;
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