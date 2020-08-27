import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    const ingredients = {...props.ingredients}
    const ingredientsList = Object.keys(ingredients).map((element, id) =>{
        return <li style={{textTransform: "capitalize"}} key={element + id}>{element}: {ingredients[element]}</li>
    })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicions burger with your ingredients:</p>
            <ul>
            {ingredientsList}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    )
};

export default orderSummary;