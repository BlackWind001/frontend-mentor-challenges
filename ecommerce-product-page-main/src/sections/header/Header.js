import React from 'react';
import styled from 'styled-components';
import BurgerMenu from '@components/BurgerMenu';
import HeaderContainer from '@components/HeaderContainer';
import CollapsibleHeaderNav from '@components/CollapsibleHeaderNav';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import Logo from '@images/logo.svg';
import MenuIcon from '@images/icon-menu.svg';
import CartIcon from '@images/icon-cart.svg';
import Avatar from '@images/image-avatar.png';
import { APP_CONTAINER_TAB_SIZE_WIDTH } from '@constants/style_constants';

const StyledLogo = styled.img`
    align-self: center;
`;

const StyledBurgerMenuContainer = styled.div`
    height: 100%;
    display: flex;
    cursor: pointer;

    @media screen and (min-width: ${APP_CONTAINER_TAB_SIZE_WIDTH}px) {
        display: none;
    }
`;

const StyledBurgerMenuIcon = styled.img`
    height: 15px;
    align-self: center;
`;

const StyledCartIcon = styled.img`
    height: 20px;
    width: 20px;
`;

const navItems = [
    {
        label: 'Collections',
        link: '#'
    },
    {
        label: 'Men',
        link: '#'
    },
    {
        label: 'Women',
        link: '#'
    },
    {
        label: 'About',
        link: '#'
    },
    {
        label: 'Contact',
        link: '#'
    }
];

function Header () {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);
    const handleBurgerOpen = () => {
        setIsBurgerMenuOpen(true);
    };
    return (
        <>
            <BurgerMenu
                isOpen={isBurgerMenuOpen}
                setIsOpen={setIsBurgerMenuOpen}
                listItems={navItems}
            />
            <HeaderContainer>
                <HeaderLeft>
                    <StyledBurgerMenuContainer onClick={handleBurgerOpen}>
                        <StyledBurgerMenuIcon src={MenuIcon} />
                    </StyledBurgerMenuContainer>
                    <StyledLogo src={Logo} />
                    <CollapsibleHeaderNav navItems={navItems} />
                </HeaderLeft>
                <HeaderRight>
                    <StyledCartIcon src={CartIcon} />
                    <StyledCartIcon src={Avatar} />
                </HeaderRight>
            </HeaderContainer>
        </>
    );
}

export default Header;
