import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import {
  Typography,
  Box
} from '@material-ui/core';


import RoomIcon from '@material-ui/icons/Room'




  



const Details = (props) => {
  const id = props.match.params.id
  const listing = props.listings.find(l => l.id == id)
  
  // local state for latitude and longitude 
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  
  // using goolge geolocation API to get the lat and lng of the lising address
  const handleApiLoaded = (map, maps) => {
    const geocoder = new window.google.maps.Geocoder() 
    geocoder.geocode({
    address: listing['Address']
  }).then((data) => {
     setLat(data.results[0].geometry.location.lat())
     setLng(data.results[0].geometry.location.lng())
    console.log('coordinates INSIDE of goelocate', lat, lng)
  })
  }

  return (
    <div className="details">
       <Box><Typography variant="h5">{listing["Name"]}</Typography></Box>
       <Box mt={2}><Typography>{listing["Address"]}</Typography></Box> 
      <Box mt={2}><Typography>{listing["Hours"]}</Typography></Box>
      <Box mt={2} mb={2}><Typography>{listing["Description"]}</Typography></Box>
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDXK9DB5b6QFG2gFxA4ISprrHty1zvnSWc' }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          defaultCenter={{
            lat: 30.2672,
            lng: -97.7431
          }}
          defaultZoom={12}
        >
            <RoomIcon className="text-red"
            lat={lat}
            lng={lng}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}


export default Details