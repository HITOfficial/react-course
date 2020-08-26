import React from './react';
import classes from './BuildControl.css';

const buildControl = (props) => {
    return(
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button className="Less">Less</button>
            <button className="More">More</button>
        </div>
    )

}

export default buildControl;