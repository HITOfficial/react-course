import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

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
            <p>Price for Your Burger: <strong>{props.price.toFixed(2)}</strong> $</p>
            <p>Continue to Checkout?</p>
            <Button
                click={props.close}
                btnType="Danger">
                CANCEL
            </Button>
            <Button
                click={props.continue}
                btnType="Success">
                CONTINUE
                </Button>
        </Aux>
    )
};

export default orderSummary;