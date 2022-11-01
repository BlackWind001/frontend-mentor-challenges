import React, { useEffect } from 'react';
import styled from 'styled-components';
import CartIcon from '@images/icon-cart.svg';

const StyledAddToCartButton = styled.button`
    flex-grow: 2;
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

function AddToCartButton () {
    const [showShadow, setShowShadow] = React.useState(false);
    const timeoutRef = React.useRef(null);

    useEffect(() => {
        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setShowShadow(false);
            clearTimeout(timeoutRef.current);
        }, 300);
    }, [showShadow]);

    const handleClick = function () {
        setShowShadow(true);
    };

    return (
        <StyledAddToCartButton showShadow={showShadow} onClick={handleClick}>
            <StyledImage />
            <StyledText>Add to cart</StyledText>
        </StyledAddToCartButton>
    );
}

export default AddToCartButton;
