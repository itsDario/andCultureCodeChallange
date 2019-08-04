import React from 'react'

const Navigation = (props) => {



    return (
        <div className="pageButtons">
            <button onClick={() => props.navigate(-1)}>Last Page</button>
            <button onClick={() => props.navigate(1)}>Next Page</button>
        </div>
    )
}

export default Navigation