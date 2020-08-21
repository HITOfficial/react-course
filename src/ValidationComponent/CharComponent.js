import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
    return (
        <div className="CharComponent">
            {
                props.char
            }
        </div>
    );
}

export {CharComponent} 