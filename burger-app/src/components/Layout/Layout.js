import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <main className="Content">
                {props.children}
            </main>
            {console.log(classes.Content)}
        </Aux>
    )
};

export default layout;