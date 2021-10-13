
import { combineReducers } from 'redux'

const user = (state = null) => state

// testing the listings component now 
const listings = (state = []) => state

export default combineReducers({ user, listings })