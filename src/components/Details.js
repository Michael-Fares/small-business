import React from 'react';
import {
  Typography,
  Box
} from '@material-ui/core';

const Details = (props) => {
  const id = props.match.params.id
    const listing = props.listings.find(l => l.id == id)
    console.log("props.listings", props)
  return (
    <div className="details">
       <Box><Typography variant="h5">{listing["Name"]}</Typography></Box>
       <Box mt={2}><Typography>{listing["Address"]}</Typography></Box> 
      <Box mt={2}><Typography>{listing["Hours"]}</Typography></Box>
      <Box mt={2}><Typography>{listing["Description"]}</Typography></Box>
      {/* This last one will need to call / show the google maps API */}
    </div>
  )
}


export default Details