import React from 'react';
import GoogleMapReact from 'google-map-react';


import {
  Typography,
  Box
} from '@material-ui/core';

import RoomIcon from '@material-ui/icons/Room'


const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDXK9DB5b6QFG2gFxA4ISprrHty1zvnSWc' }}
          defaultCenter={{
            lat: 30.2672,
            lng: -97.7431
          }}
          defaultZoom={10}
        >
            <AnyReactComponent
            lat={30.2672}
            lng={-97.7431}
            text={<RoomIcon className="text-red"/>}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}


export default Details