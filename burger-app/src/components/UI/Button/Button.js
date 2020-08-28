import React from 'react';
import classes from './Button.css';

const  button = (props) => {
    return <button
    className={[props.btnType, 'Button'].join(' ')}
    onClick={props.click}>
        {props.children}
        </button>
};

export default button