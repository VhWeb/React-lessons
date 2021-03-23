import React from 'react';
import './CounterIcon.css';
import { Icon } from "semantic-ui-react";
import { useSelector } from "react-redux";

function CounterIcon() {
    const cart = useSelector(state => state.cart);
    const quantity = cart.reduce((sum, product) => {
        return sum + (1 * product.quantity)
    }, 0);
    return (
        <div className='cart-icon'>
            <Icon name='cart' />
            {quantity > 0 && <span className='basket'>{quantity}</span> }
        </div>
    );
}

export default CounterIcon;
