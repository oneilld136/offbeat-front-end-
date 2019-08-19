import React, { useState } from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
import mapStyles from "./mapStyles";


function Map(props){

const [selectedSpot,setSelectedSpot] = useState(null);

  return  (

      <GoogleMap
          defaultZoom={12}
          defaultCenter={{lat:40.692532,lng:-73.990997 }}
          defaultOptions={{styles: mapStyles}}
          >
          {props.spots.map((spot) => (

            <Marker key={spot.id} position={{lat:parseFloat(spot.lat),lng: parseFloat(spot.lng)
            }}
              onClick={() => {
                setSelectedSpot(spot);
              }}
              icon = {{
                url: '/brooklynbridge.svg',
                scaledSize: new window.google.maps.Size(27,27)
              }}
            />
          ))}

          {selectedSpot && (
            <InfoWindow
            position={{lat:parseFloat(selectedSpot.lat),lng: parseFloat(selectedSpot.lng)}}
            onCloseClick={() => {
              setSelectedSpot(null);
            }}
>
            <div className="spot">
            {selectedSpot.name}
            <img style={{width: 300, height: 300}} src={selectedSpot.img}/>
            </div>
            </InfoWindow>
          )}

  </GoogleMap>


        );
      }




const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App(props){

  return (
    <div   style={{ width: "50vw", height: "80vh" }}>
  <WrappedMap className="map" googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC-6F3hmcqCvaH3eS7r6CxM9jCZwjjnKo4'}
  loadingElement={<div className="map" style={{ height: `100%` }} />}
        containerElement={<div className="map" style={{ height: `100%` }} />}
        mapElement={<div className="map" style={{ height: `100%` }} />}
  spots={props.spots}
/>
  </div>)
}
