import React from 'react';
import styled from "styled-components";
import CartIcon from '@images/icon-cart.svg';
import { APP_CONTAINER_TAB_SIZE_WIDTH } from '@constants/style_constants';
import CartContext from '@contexts/CartContext';
import { PRODUCT_OBJ } from '@constants/product_constants';
import DeleteIcon from '@images/icon-delete.svg';

const StyledCartIcon = styled.div`
    height: 20px;
    width: 20px;
    cursor: pointer;
    mask: url(${CartIcon}) no-repeat center;
    mask-size: contain;
    background-color: var(--neutral-grayish-blue);

    &:hover, &.active {
        background-color: var(--neutral-black);
    }
`;

const StyledCartCount = styled.div`
    height: 11px;
    padding: 0 5.5px;
    position: absolute;
    top: -3px;
    right: -2px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-orange);
    border-radius: 5px;
    color: var(--neutral-white);
    font-size: 7px;
    font-weight: var(--font-weight-bold);
    text-align: center;
`;

const StyledCart = styled.div`
    position: absolute;
    top: 3.5rem;
    right: -3.2rem;
    z-index: 1;
    width: 360px;
    height: 250px;
    display: flex;
    flex-direction: column;
    background-color: var(--neutral-white);
    border-radius: 1rem;
    box-shadow: 0 0 15px 0 var(--neutral-dark-grayish-blue);
    
    @media screen and (min-width: ${APP_CONTAINER_TAB_SIZE_WIDTH}px) {
        top: 3rem;
        box-shadow: 0 0 15px 0 var(--neutral-dark-grayish-blue);
    }
`;

const StyledCartContainer = styled.div`
    position: relative;
`;

const StyledCartHeader = styled.span`
    padding: 1.5rem;
    font-weight: var(--font-weight-bold);
    border-bottom: 1px solid var(--header-bottom-border-color);
`;

const StyledEmptyCartContent = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    
    & span {
        font-weight: var(--font-weight-bold);
        color: var(--neutral-grayish-blue);
    }
`;

const StyledCartContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding:1.5rem;
`;

const StyledCartItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const StyledCartItem = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;

    & p {
        margin: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: var(--neutral-dark-grayish-blue);
    }

    & .price {
        color: var(--neutral-black);
        font-weight: var(--font-weight-bold);
    }

    &>p>*:not(:last-child) {
        margin-bottom: 0.3rem;
    }
`;

const StyledImageContainer = styled.div`
    flex-basis: 40px;
    flex-grow: 1;
    flex-shrink: 0;
    width: auto;
    border-radius: 0.5rem;

    & img {
        width: 100%;
        border-radius: inherit;
    }
`;

const StyledDelete = styled.button`
    height: 15px;
    width: 15px;
    align-self: center;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
`;

const StyledButton = styled.button`
    align-self: stretch;
    text-align: center;
    background-color: var(--primary-orange);
    color: var(--neutral-white);
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
`;


function ProductsCart () {
    const [ showCart, setShowCart ] = React.useState(false);
    const cartContextValue = React.useContext(CartContext);
    const { cartItems, removeFromCart } = cartContextValue;

    const handleCartToggle = function () {
        setShowCart(!showCart);
    };

    return (
        <StyledCartContainer>
            {
                showCart ?
                (
                    <StyledCart>
                        <StyledCartHeader>Cart</StyledCartHeader>
                        {
                            cartItems.length <= 0 &&
                            (
                                <StyledEmptyCartContent>
                                    <span>Your cart is empty.</span>
                                </StyledEmptyCartContent>
                            )
                        }
                        {
                            cartItems.length > 0 &&
                            <StyledCartContent>
                                <StyledCartItemsContainer>
                                {
                                    cartItems.map((cartItem, index) => {
                                        const { quantity, itemId } = cartItem;
                                        const { name, price, thumbnailUrl } = PRODUCT_OBJ
                                        const totalPrice = price * quantity;
                                        return (
                                            <StyledCartItem key={index}>
                                                <StyledImageContainer>
                                                    <img src={thumbnailUrl} />
                                                </StyledImageContainer>
                                                <p>
                                                    <p>{name}</p>
                                                    <p>${price} x {quantity} <span className='price'>&nbsp;${totalPrice}</span></p>
                                                </p>
                                                <StyledDelete onClick={() => { removeFromCart(itemId); }}>
                                                    <img src={DeleteIcon} />
                                                </StyledDelete>
                                            </StyledCartItem>
                                        );
                                    })
                                }
                                </StyledCartItemsContainer>
                                <StyledButton>Checkout</StyledButton>
                            </StyledCartContent>
                        }
                    </StyledCart>
                ) :
                null
            }
            <StyledCartIcon
                className={showCart && 'active'}
                onClick={handleCartToggle}
            />
            {
                cartItems.length > 0 &&
                <StyledCartCount>
                    {cartItems.reduce((acc, val) => acc + val.quantity, 0)}
                </StyledCartCount>
            }
        </StyledCartContainer>
    )
}

export default ProductsCart;
