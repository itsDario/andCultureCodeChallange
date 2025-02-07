import React from 'react'

const Navigation = (props) => {
console.log(props)
    return (
        <div className="pageButtons">
            <button onClick={() => props.navigate(-1)}>Last Page</button>
            <span className='pageDisplay'>{props.page}</span>
            <button onClick={() => props.navigate(1)}>Next Page</button>
        </div>
    )
}

export default Navigation