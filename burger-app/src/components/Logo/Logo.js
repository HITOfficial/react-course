import React from 'react';
import burgerLogo from '../../asstets/images/burger-logo.png';
import classes from './Logo.css'

const logo = (props) => {
 return (
     <div className="Logo">
        <img src={burgerLogo} alt="MyBurger"></img>
     </div>
 );
};

export default logo