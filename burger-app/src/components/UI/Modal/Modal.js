import React from 'react';
import classes from './Modal.css'
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';

const modal = (props) => {
    return(
        <div className="Modal" style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : 0
        }}>
            {props.children}
        </div>
    )
}

export default modal;