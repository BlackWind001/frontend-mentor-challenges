import React from 'react';
import styled from 'styled-components';
import BurgerMenu from '@components/BurgerMenu';
import HeaderContainer from '@components/HeaderContainer';
import CollapsibleHeaderNav from '@components/CollapsibleHeaderNav';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import Logo from '@images/logo.svg';
import MenuIcon from '@images/icon-menu.svg';
import Avatar from '@images/image-avatar.png';
import { APP_CONTAINER_TAB_SIZE_WIDTH } from '@constants/style_constants';
import ProductsCart from './ProductsCart';

const StyledLogo = styled.img`
    align-self: center;
`;

const StyledBurgerMenuContainer = styled.div`
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

const StyledAvatar = styled.div`
    height: 24px;
    width: 24px;
    border-radius: 24px;
    cursor: pointer;
    background-image: url(${Avatar});
    background-size: 100% 100%;
    
    &:hover {
        box-shadow: inset 0 0 2px 2px hsl(26, 100%, 55%);
    }
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
                    <ProductsCart />
                    <StyledAvatar />
                </HeaderRight>
            </HeaderContainer>
        </>
    );
}

export default Header;
