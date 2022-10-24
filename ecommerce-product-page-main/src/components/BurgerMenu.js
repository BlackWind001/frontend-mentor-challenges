import React from 'react';
import styled from 'styled-components';
import Overlay from '@components/Overlay';
import CloseIcon from '@images/icon-close.svg';

const StyledBurgerMenuContentContainer = styled.div`
    height: 100%;
    max-width: 300px;
    padding: 1rem;
    background-color: var(--neutral-white);
`;

const StyledCloseButtonContainer = styled.div`
    margin-bottom: 3rem;
`;

const StyledCloseButton = styled.button`
    height: max-content;
    width: max-content;
    border: unset;
    background-color: transparent;
    padding: 0.25rem;
    cursor: pointer;
`;

const StyledCloseButtonImg = styled.img`
    height: 20px;
    width: 20px;
`;

const StyledMenuList = styled.ul`
    list-style-type: none;

    & li:not(:last-child) {
        margin-bottom: 1.5rem;
    }

    & a {
        font-weight: var(--font-weight-bold);
        text-decoration: none;
    }
`;

const BurgerMenu = ({ listItems, isOpen, setIsOpen }) => {
    if (!Array.isArray(listItems) || !isOpen) {
        return null;
    }

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <Overlay>
            <StyledBurgerMenuContentContainer>
                <StyledCloseButtonContainer>
                    <StyledCloseButton onClick={handleClose}>
                        <StyledCloseButtonImg src={CloseIcon}  />
                    </StyledCloseButton>
                </StyledCloseButtonContainer>
                <StyledMenuList>
                    {
                        listItems.map((listItem) => <li><a href={listItem.link}>{listItem.label}</a></li>)
                    }
                </StyledMenuList>
            </StyledBurgerMenuContentContainer>
        </Overlay>
    );
};

export default BurgerMenu;
