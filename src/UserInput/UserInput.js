import React from 'react';


const UserInput = (props) => {
    const style = {
        border: '2px solid red',
        color: 'red'
    }
    return (
        <input type="text"
            onChange={props.name}
            value={props.curentName}
            style={style}/>
    )
}

export {UserInput};