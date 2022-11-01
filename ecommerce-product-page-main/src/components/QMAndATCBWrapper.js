import React from 'react';
import styled from 'styled-components';
import { APP_CONTAINER_TAB_SIZE_WIDTH } from '@constants/style_constants';
import QuantityModifier from './QuantityModifier';
import AddToCartButton from './AddToCartButton';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width: ${APP_CONTAINER_TAB_SIZE_WIDTH}px) {
        flex-direction: row;
    }
`;

// The function name is a part-acronym for
// QuantityModifierAndAddToCartButtonWrapper
function QMAndATCBWrapper () {
    return (
        <StyledWrapper>
            <QuantityModifier />
            <AddToCartButton />
        </StyledWrapper>
    );
}

export default QMAndATCBWrapper;
