import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import {
  Typography,
  Box
} from '@material-ui/core';

import RoomIcon from '@material-ui/icons/Room'

const google = window.google 
const geocoder = new google.maps.Geocoder()
  



const Details = (props) => {
  const id = props.match.params.id
  const listing = props.listings.find(l => l.id == id)
  console.log("props.listings", props)
  
  // local state for latitude and longitude 
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  
  // using goolge geolocation API to get the lat and lng of the lising address
  useEffect(() => {
  geocoder.geocode({
    address: listing['Address']
  }).then((data) => {
     setLat(data.results[0].geometry.location.lat())
     setLng(data.results[0].geometry.location.lng())
    console.log('coordinates INSIDE of goelocate', lat, lng)
  })
  }, [])



  return (
    <div className="details">
       <Box><Typography variant="h5">{listing["Name"]}</Typography></Box>
       <Box mt={2}><Typography>{listing["Address"]}</Typography></Box> 
      <Box mt={2}><Typography>{listing["Hours"]}</Typography></Box>
      <Box mt={2}><Typography>{listing["Description"]}</Typography></Box>
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDXK9DB5b6QFG2gFxA4ISprrHty1zvnSWc' }}
          defaultCenter={{
            lat: 30.2672,
            lng: -97.7431
          }}
          defaultZoom={10}
        >
            <RoomIcon className="text-red"
            lat={lat}
            lng={lng}
            text={listing["Address"]}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}


export default Details