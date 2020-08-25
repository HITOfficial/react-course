import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';

const layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className="Content">
                {props.children}
            </main>
            {console.log(classes.Content)}
        </Aux>
    )
};

export default layout;