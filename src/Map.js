import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';


function Map(){
   


  return  (
      <GoogleMap
          defaultZoom={12}
          defaultCenter={{lat:40.692532,lng:-73.990997 }}
          >
          <Marker position={{lat:40.715981,lng:-73.962563}}/>
          </GoogleMap>
        );
}



const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App(){
  return (
    <div style={{ width: "60vw", height: "60vh" }}>
  <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC-6F3hmcqCvaH3eS7r6CxM9jCZwjjnKo4'}
  loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
  </div>
);
}
