import React from 'react';

// Default context updater function
const addToCart = () => {
    console.warn('The context value has not been set. Check with provider.');
};

const removeFromCart = addToCart;
const removeAllFromCart = addToCart;

const CartContext = React.createContext({
    cartItems: [],
    addToCart,
    removeFromCart,
    removeAllFromCart
});

export default CartContext;
