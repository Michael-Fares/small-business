import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'

import AddListing from './components/AddListing'
import Listings from './containers/Listings'
import Login from './components/Login'
import Details from './components/Details'


// Will these function be in redux state or local state?

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}


// Write ProtectedRoute function here
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



const Router = () => {
    return (
        <Switch>
            {/* I will need at least these 2 routes */}
            <Route path="/login" component={Login} />

            <ProtectedRoute path="/add" component={AddListing} />

            <Route path="/" component={Listings} />
            <Route path="/listings/:id" component={Details} />
        </Switch>
    );
};

export default Router;