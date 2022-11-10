import React from 'react';
import styled from 'styled-components';
import { APP_CONTAINER_TAB_SIZE_WIDTH } from '@constants/style_constants';

const StyledNavContainer = styled.nav`
    display: none;

    @media screen and (min-width: ${APP_CONTAINER_TAB_SIZE_WIDTH}px) {
        display: flex;
        gap: 2rem;

        &.nav-container{
            margin: 0;
        }
    }
`;

const StyledNavItem = styled.a`
    color: var(--neutral-grayish-blue);
    text-decoration: none;
    padding: 2rem 0;

    &:hover {
        box-shadow: inset 0 -4px var(--primary-orange);
        color: var(--neutral-black);
    }
`;

const CollapsibleHeaderNav = ({ navItems }) => {
    return (
        <StyledNavContainer className='nav-container'>
            {
                Array.isArray(navItems) ? (
                    navItems.map((navItem, index) => <StyledNavItem key={navItem.label+index} href={navItem.link}>{navItem.label}</StyledNavItem>)
                ) : null
            }
        </StyledNavContainer>
    );
};

export default CollapsibleHeaderNav;
