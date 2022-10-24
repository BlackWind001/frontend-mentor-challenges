import React from 'react';
import styled from 'styled-components';
import { APP_CONTAINER_TAB_SIZE_WIDTH } from '@constants/style_constants';

const StyledNavContainer = styled.nav`
    display: none;

    @media screen and (min-width: ${APP_CONTAINER_TAB_SIZE_WIDTH}px) {
        display: flex;
        gap: 2rem;
    }
`;

const StyledNavItem = styled.a`
    color: var(--neutral-grayish-blue);
    text-decoration: none;
`;

const CollapsibleHeaderNav = ({ navItems }) => {
    return (
        <StyledNavContainer>
            {
                Array.isArray(navItems) ? (
                    navItems.map((navItem, index) => <StyledNavItem key={navItem.label+index} href={navItem.link}>{navItem.label}</StyledNavItem>)
                ) : null
            }
        </StyledNavContainer>
    );
};

export default CollapsibleHeaderNav;
