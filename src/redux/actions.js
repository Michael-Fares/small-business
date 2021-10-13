export const addListing = (listing) => {
  return {
    type: "ADD_LISTING",
    value: listing
    // the type and value keys are mandatory. value is also called payload in some repos
  }
}

export const removeListing = (index) => {
  return {
    type: "REMOVE_LISTING",
    value: index
  }
}

export const setLoggedIn = (loggedIn) => {
  return {
    type: "SET_LOGIN",
    value: !loggedIn
  }
}

// change this to fetch coordinates from google maps API
export const fetchCoordinates = () => {
  return (dispatch) => {
      fetch(url)
       .then(res => res.json())
       .then(response => {
           const action = {
              type: 'FETCH_COORDINATES',
              value: response.Results
           }
           dispatch(action)
       })
  }
}