import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.6,
    meat: 1.1,
    bacon: 0.7
};

const INGREDIENTS_LIST = [];

class BurgerBuilder extends Component {

    state =  {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {... this.state.ingredients}; // making an copy of object 
        updateIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({
            totalPrice: newTotalPrice,
            ingredients: updateIngredients
        });
        INGREDIENTS_LIST.push(type); // i reworked those functions by myself becouse in this courese was for me not clearly easy to undestrand those, and i think my once visualy functionality is better
    }
    
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount - 1;
        if(oldCount <= 0) {
            return 0;
        } else {
            const updateIngredients = {... this.state.ingredients}; // making an copy of object 
            updateIngredients[type] = updateCount;
            const priceAddition = INGREDIENT_PRICES[type];
            const newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            this.setState({
                totalPrice: newTotalPrice,
                ingredients: updateIngredients
            });
            if(INGREDIENTS_LIST.lastIndexOf(type) === -1){
                return 0;
            } else {
                INGREDIENTS_LIST.splice(INGREDIENTS_LIST.lastIndexOf(type), 1);
            }
        }
    }


    render() {
        const disabledInfo = {...this.state.ingredients};
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredientsList={INGREDIENTS_LIST} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                />
            </Aux>
        );
    }
    
}

export default BurgerBuilder;