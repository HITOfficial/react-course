import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => {
    return(
        <div className="BuildCotrols">
            {controls.map(element => {
                return <BuildControl
                            key={element.label}
                            label={element.label}
                            added={() => props.ingredientAdded(element.type) /* in Parent I made an reference to method, and here I also added an argument to this also method*/}
                            removed={() => props.ingredientRemoved(element.type)}
                            disabled={props.disabled[element.type]}
                        />
            })}
        </div>
    );
}

export default buildControls;