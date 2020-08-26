import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transformedIngredients = [...props.ingredientsList.map((element, index) => {
        return <div className={element.charAt(0).toUpperCase() + element.slice(1)} key={element + index}></div>
    })]

    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;