import React, { Component } from 'react';
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';
import BurgerBuilder from '../../../containers/BurgerBuilder/BurgerBuilder';


class BurgerIngredient extends Component {

    render () {

        let ingredient = null
        
        switch(this.props.type) {
            case ('bread-bottom'):
                ingredient = (
                    <div className = "BreadBottom"></div>
                );
                break;

            case ('bread-top'):
                ingredient = (
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                );
                break

            case ('meat'):
                ingredient = (
                    <div className="Meat"></div>
                );
                break
                
            case ('cheese'):
                ingredient = (
                    <div className="Cheese"></div>
                );
                break

            case ('salad'):
                ingredient = (
                    <div className="Salad"></div>
                );
                break

            case ('bacon'):
                ingredient = (
                    <div className="Bacon"></div>
                );
                break
            default:
                ingredient = null;
        }
        return ingredient;
    }
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired // it will check twi things 1. if is a typa a string and second if it is pased
}

export default BurgerIngredient;