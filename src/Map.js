import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';



function Map(props){



  return  (

      <GoogleMap
          defaultZoom={12}
          defaultCenter={{lat:40.692532,lng:-73.990997 }}
          >
          {props.spots.map((spot) => (

            <Marker key={spot.id} position={{lat:spot.lat,lng:spot.lng}}/>

          ))}

          </GoogleMap>
        );
}



const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App(props){

  return (
    <div   style={{ width: "50vw", height: "60vh" }}>
  <WrappedMap className="map" googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC-6F3hmcqCvaH3eS7r6CxM9jCZwjjnKo4'}
  loadingElement={<div className="map" style={{ height: `100%` }} />}
        containerElement={<div className="map" style={{ height: `100%` }} />}
        mapElement={<div className="map" style={{ height: `100%` }} />}
  spots={props.spots}
/>
  </div>)
}
