/* eslint-disable no-unused-vars */
import { withGoogleMap,GoogleMap, Marker } from "react-google-maps";
import {useLoadScript} from "@react-google-maps/api";


export default function Map() {
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDE_O1TEfe4MFNmr1gwPNXV5PNlOVqwoh8",
    });

  if (!isLoaded) return <div>Loading...</div>;
 
  return <MapWithAMarker containerElement={<div style={{ height: `600px` }} />}
  mapElement={<div style={{ height: `100%`,width: `60%` }} 
  loadingElement={<div style={{ height: `100%` }} />}
  />} />;
}


const MapWithAMarker = withGoogleMap(props =>
    <div>
      <GoogleMap
    defaultZoom={9}
    defaultCenter={{ lat:6.914133, lng: 79.890303}}
    >
    <Marker
      position={{ lat:6.9141, lng: 79.890303 }}
    />

  </GoogleMap>
    </div>
    
);


