import React from 'react';
import {
  Typography,
  Box
} from '@material-ui/core';

const Details = (props) => {
  const id = props.match.params.id
    // const listing = props.listings.find(l => l.id == id)
    console.log("props.listings", props)
  return (
    <div className="details">
      {id}
      {/* <Typography variant="h2">{listing["Name"]}</Typography>
      <Typography>{listing["Hours"]}</Typography>
      <Typography>{listing["Description"]}</Typography>
      {/* This last one will need to call / show the google maps API */}
      {/* <Typography>{listing["Address"]}</Typography> */}
    </div>
  )
}


export default Details