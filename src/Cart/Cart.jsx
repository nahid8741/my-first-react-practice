import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    
    // const {strMeal} = props;
    return (
        <div className='cart'>
            <h4 className='cart-name'>Cart name:{cart.length}</h4> 
            {
                cart.map(cart => <p>{cart.strMeal}</p>)
            }
        </div>
    );
};

export default Cart;