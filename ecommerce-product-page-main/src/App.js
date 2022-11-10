import React from 'react';
import AppContainer from '@components/AppContainer';
import Header from './sections/header/Header';
import Content from './sections/content/Content';
import CartContext from './contexts/CartContext';

export default function EcommerceApp () {
    const [cartItems, setCartItems] = React.useState([]);
    const cartContextValue = { cartItems };

    const addToCart = (itemId, quantity) => {
        if (quantity <= 0 || typeof itemId !== 'string') {
            return;
        }

        if (Array.isArray(cartItems)) {
            // Check if the item has already been added to the cart.
            const index = cartItems.findIndex((existingCartItem) => existingCartItem.itemId === itemId);
            const newQuantity = index !== -1 ? (cartItems[index].quantity + quantity) : quantity;
            const newCartItems = cartItems.slice(0);

            index !== -1 ?
            (newCartItems[index].quantity = newQuantity) :
            (newCartItems.push({ itemId, quantity }));

            setCartItems(newCartItems);
        }
    };

    const removeFromCart = (itemId) => {
        if (!Array.isArray(cartItems)) {
            return;
        }

        const index = cartItems.findIndex((cartItem) => cartItem.itemId === itemId);

        if (index === -1) {
            return;
        }

        const newCartItems = cartItems.slice(0);

        newCartItems.splice(index, 1);

        setCartItems(newCartItems);
    };

    const removeAllFromCart = () => {
        const newCartItems = [];

        setCartItems(newCartItems);
    };

    cartContextValue['addToCart'] = addToCart;
    cartContextValue['removeFromCart'] = removeFromCart;
    cartContextValue['removeAllFromCart'] = removeAllFromCart;

    return (
        <AppContainer>
            <CartContext.Provider value={cartContextValue}>
                {/* Responsive header goes here */}
                <Header />
                {/* Responsive content section goes here */}
                <Content />
            </CartContext.Provider>
        </AppContainer>
    );
}
