import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    return (
    <div className="UserOutput">
        <p>It is the first paragraph</p>
        <p>{props.name}</p>
    </div>
    )
}

export {UserOutput} 