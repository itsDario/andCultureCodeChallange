import React from 'react'

const BrewSummery = (props) => {

    return (
        <div className='brewSummery'>
            <h2>{props.name}</h2>
            <p>{props.street}</p>
            <p>{props.city},{props.state},{props.postal_code}</p>
            <p>Brewery type: {props.brewery_type}</p>
            <div className='buttons'>
                <button onClick={() => props.loadBrew(props)}>Map</button>
                <a href={props.website_url}><button>Website</button></a>
            </div>
        </div>
    )
}

export default BrewSummery