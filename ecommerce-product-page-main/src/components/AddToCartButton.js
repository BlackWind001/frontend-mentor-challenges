import React, { useEffect } from 'react';
import styled from 'styled-components';
import CartIcon from '@images/icon-cart.svg';
import ProductContext from '@contexts/ProductContext';
import CartContext from '@contexts/CartContext';

const StyledAddToCartButton = styled.button`
    flex-grow: 2;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 1rem;
    padding: 1.25rem 1.5rem;
    color: var(--neutral-white);
    background-color: var(--primary-orange);
    
    ${({ showShadow }) => {
        if (showShadow) {
            return 'box-shadow: var(--light-blue-box-shadow);';
        }
    }}
`;

const StyledButtonOverlay = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background-color: var(--neutral-white);
    opacity: 0.5;
`;

const StyledImage = styled.div`
    height: 15px;
    width: 15px;
    background-color: var(--neutral-white);
    mask: url(${CartIcon}) no-repeat center;
    mask-size: contain;
`;

const StyledText = styled.span`
    font-weight: var(--font-weight-bold);
`;

function AddToCartButton ({ isDisabled, quantity }) {
    const [showShadow, setShowShadow] = React.useState(false);
    const timeoutRef = React.useRef(null);
    const productContextValue = React.useContext(ProductContext);
    const cartContextValue = React.useContext(CartContext);

    const handleAddToCart = function () {
        if (quantity <= 0) {
            return;
        }
        const { addToCart } = cartContextValue;

        addToCart(productContextValue, quantity);
    };

    useEffect(() => {
        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setShowShadow(false);
            clearTimeout(timeoutRef.current);
        }, 300);
    }, [showShadow]);

    const handleClick = function () {
        if (isDisabled) {
            return;
        }

        handleAddToCart();
        setShowShadow(true);
    };

    return (
        <StyledAddToCartButton showShadow={showShadow} onClick={handleClick}>
            {
                isDisabled &&
                <StyledButtonOverlay />
            }
            <StyledImage />
            <StyledText>Add to cart</StyledText>
        </StyledAddToCartButton>
    );
}

export default AddToCartButton;
