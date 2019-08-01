import { compose, withProps } from "recompose"
import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const GoogleMaps = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry&key=${ENV['API_KEY']}&ap,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: parseFloat(props.latitude), lng: parseFloat(props.longitude) }}
    >
        {props.isMarkerShown && <Marker position={{ lat: parseFloat(props.latitude), lng: parseFloat(props.longitude) }} />}
    </GoogleMap>
)
export default GoogleMaps;