import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'

import AddListing from './containers/AddListing'
import Listings from './containers/Listings'
import Login from './containers/Login'
import Details from './containers/Details'


// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"

export const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

console.log("value of check auth function", checkAuth())

const ProtectedRoute = ({component: Component, ...rest}) => {
    // ... rest just signifies the rest of the attributes passed into the Route
    console.log("rest", rest)
    return (
      <Route
      {...rest}
      render={(props) => checkAuth()
          ? <Component {...props} />
          : <Redirect to="/login" />}
      />
    )
  }



const Router = (window) => {
    return (
        <Switch>
            {/* I will need at least these 2 routes */}
            <Route path="/login" component={Login} />
            <Route path="/listings/:id" component={Details} />
            <ProtectedRoute path="/add" component={AddListing} />
           
            <Route path="/" component={Listings} />
            
        </Switch>
    );
};

export default Router;