import React from 'react';
import AppContainer from '@components/AppContainer';
import Header from './sections/header/Header';

export default function EcommerceApp () {
    return (
        <AppContainer>
            {/* Responsive header goes here */}
            <Header />
            {/* Responsive content section goes here */}
        </AppContainer>
    );
}
