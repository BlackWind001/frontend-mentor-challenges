import React from 'react';
import styled from 'styled-components';

const StyledQuantityModifierContainer = styled.div`
    display: flex;
    flex-grow: 1;
    background-color: var(--header-bottom-border-color);
    border-radius: 1rem;
`;

const StyledQuantityModifierButton = styled.button`
    border: none;
    background-color: transparent;
    color: var(--primary-orange);
    padding: 1.25rem 1.5rem;
    cursor: pointer;
    flex-grow: 1;

    &.left-button {
        border-top-left-radius: inherit;
        border-bottom-left-radius: inherit;
    }

    &.right-button {
        border-top-right-radius: inherit;
        border-bottom-right-radius: inherit;
    }

    ${({showShadow}) => {
        if (showShadow) {
            return 'box-shadow: var(--light-blue-box-shadow);';
        }
    }}
`;

const StyledQuantityDisplayer = styled.p`
    flex-grow: 1;
    font-weight: var(--font-weight-bold);
    margin: auto 0;
    padding: 0;
    text-align: center;
`;

function QuantityModifier () {
    const [ quantity, setQuantity ] = React.useState(0);
    const [showLeftButtonShadow, setShowLeftButtonShadow] = React.useState(false);
    const [showRightButtonShadow, setShowRightButtonShadow] = React.useState(false);
    const timeoutRef = React.useRef(null);

    React.useEffect(() => {
        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setShowLeftButtonShadow(false);
            clearTimeout(timeoutRef.current);
        }, 300);
    }, [showLeftButtonShadow])

    React.useEffect(() => {
        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setShowRightButtonShadow(false);
            clearTimeout(timeoutRef.current);
        }, 300);
    }, [showRightButtonShadow])

    const handleDecreaseCartQuantity = function () {
        setShowLeftButtonShadow(true);
        const newQuantity = quantity - 1;

        if (newQuantity < 0) {
            return;
        }

        setQuantity(newQuantity);
    };
    const handleIncreaseCartQuantity = function () {
        setShowRightButtonShadow(true);
        setQuantity(quantity + 1);
    };

    return (
        <StyledQuantityModifierContainer>
            <StyledQuantityModifierButton
                className='left-button'
                showShadow={showLeftButtonShadow}
                onClick={handleDecreaseCartQuantity}
            >
                -
            </StyledQuantityModifierButton>
            <StyledQuantityDisplayer>{quantity}</StyledQuantityDisplayer>
            <StyledQuantityModifierButton
                className='right-button'
                showShadow={showRightButtonShadow}
                onClick={handleIncreaseCartQuantity}
            >
                +
            </StyledQuantityModifierButton>
        </StyledQuantityModifierContainer>
    );
}

export default QuantityModifier;
