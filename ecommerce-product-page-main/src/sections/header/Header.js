import React from 'react';
import HeaderContainer from '../../components/HeaderContainer';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

function Header () {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <span>Hello</span>
                <span>World</span>
            </HeaderLeft>
            <HeaderRight>
                <span>Hello</span>
                <span>World</span>
            </HeaderRight>
        </HeaderContainer>
    );
}

export default Header;
