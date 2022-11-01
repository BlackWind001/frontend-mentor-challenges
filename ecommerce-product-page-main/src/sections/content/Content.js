import React from 'react';
import styled from 'styled-components';
import { APP_CONTAINER_TAB_SIZE_WIDTH, APP_CONTAINER_MAX_WIDTH } from '@constants/style_constants';
import Description from '../desc';
import ImageSection from '../img';

const StyledContentContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    flex: 1;

    @media screen and (min-width: ${APP_CONTAINER_TAB_SIZE_WIDTH}px) {
        flex-direction: row;
        gap: 3rem;
        padding: 2rem;
    }

    @media screen and (min-width: ${APP_CONTAINER_MAX_WIDTH}px) {
        gap: 5rem;
        padding: 3.5rem;
    }
`;

export default function Content () {
    return (
        <StyledContentContainer>
            <ImageSection />
            {/* Responsive image section goes here */}
            <Description />
            {/* Responsive description section goes here */}
        </StyledContentContainer>
    );
}
