import React from 'react'
import GoogleMaps from '../components/GoogleMaps.js'


const BrewDetails = (props) => {



    console.log(props.latitude)
    return (
        <div className='brewDetails'>
            <GoogleMaps isMarkerShown
                {...props}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />} />
            <button onClick={() => props.unloadBrew()}>Return</button>
            <h1>{props.name}</h1>
            <h2>{props.street}</h2>
            <h2>{props.city},{props.state},{props.postal_code}</h2>
        </div>
    )
}

export default BrewDetails