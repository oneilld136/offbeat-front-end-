import React, { useState } from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
import mapStyles from "./mapStyles";


function Map(props){

const [selectedSpot,setSelectedSpot] = useState(null);

  return  (

      <GoogleMap
          defaultZoom={13}
          defaultCenter={{lat:40.692532,lng:-73.990997 }}
          defaultOptions={{styles: mapStyles}}

          >
          {props.spots.map((spot) => (

            <Marker key={spot.id} name={spot.name} position={{lat:parseFloat(spot.lat),lng: parseFloat(spot.lng),
            }}
              animation={window.google.maps.Animation.DROP}
              onClick={() => {
                setSelectedSpot(spot);
              }}

              icon = {{
                url: '/search.png',
                scaledSize: new window.google.maps.Size(25,25)
              }}
            />
          ))}

          {selectedSpot && (
            <InfoWindow
            visible={true}
            position={{lat:parseFloat(selectedSpot.lat),lng: parseFloat(selectedSpot.lng)}}
            onCloseClick={() => {
              setSelectedSpot(null);
            }}
>
            <div className="map">
            <h4 onClick={props.onClick}>{selectedSpot.name}</h4>
            <img style={{width: 400, height: 400}} src={selectedSpot.img}/>
            </div>
            </InfoWindow>
          )}

  </GoogleMap>


        );
      }




const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App(props){

  return (
    <div  className="map" style={{ width: "50vw", height: "70vh" }}>
  <WrappedMap  googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC-6F3hmcqCvaH3eS7r6CxM9jCZwjjnKo4'}
  loadingElement={<div  style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div  style={{ height: `100%` }} />}
  spots={props.spots}
/>
  </div>)
}
