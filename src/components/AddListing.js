 // should be protected by a private route
 import React, { useState, useEffect } from "react";
 import { Button } from "@material-ui/core";
 import { TextField } from '@material-ui/core';
 import { Box } from '@material-ui/core';
 import { Link } from 'react-router-dom'


 const AddListing = (props) => {
   console.log(props)
  // local state to get the listing added
  const [listing, setListing] = useState( {
    Name: '',
    Address: '',
    Hours: '',
    Description: ''
} )

  // input field change handler based on their id
  const handleTextChange = (e) => {
    const newListing = { ...listing }
    newListing[e.target.id] = e.target.value
    setListing(newListing)
  }

  // handle submit using add listing redux action
  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = { ...listing }
    payload.id = props.listings.length + 1
    console.log("THE LISTING", payload)
    // add this.props.addCar function here
    props.addListing(payload)
    
    // reset the form
    setListing({
      Name: '',
      Address: '',
      Hours: '',
      Description: ''
  } )
}


   return (
    <form className="login-form" onSubmit={handleSubmit} action="/listings">
        <TextField value={listing.Name} required="true" id="Name" onChange={handleTextChange} placeholder="Name" />
        <TextField value={listing.Address} required="true" id="Address" onChange={handleTextChange} placeholder="Address" />
        <TextField value={listing.Hours} required="true" id="Hours" onChange={handleTextChange} placeholder="Hours (ex 8AM-9PM)" />
        <TextField value={listing.Description} required="true" id="Description" onChange={handleTextChange} placeholder="Description" />
          <div className="margin-top-sm button-wide">
         <Box mt={4}>   
        <Button fullWidth = {true} 
          variant="contained"
          color="primary"
          type="submit">
          Save
        </Button>
        </Box>
        </div>
      </form>
   )
 }

 export default AddListing