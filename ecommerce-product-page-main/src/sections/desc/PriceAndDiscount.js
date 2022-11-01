import React from 'react';
import styled from 'styled-components';
import { APP_CONTAINER_TAB_SIZE_WIDTH } from '@constants/style_constants';
import ProductPrice from '@components/ProductPrice';
import DiscountTag from '@components/DiscountTag';
import OldProductPrice from '@components/OldProductPrice';

const NEW_PPRODUCT_PRICE = '$125.00';
const DISCOUNT_VALUE = '50%';
const PREVIOUS_PRODUCT_PRICE = '$250.00'

const StyledPriceAndDiscountContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (min-width: ${APP_CONTAINER_TAB_SIZE_WIDTH}px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

const StyledNewPriceAndDiscountContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

const StyledDiscountTag = styled(DiscountTag)`
    align-self: center;
`;

const StyledOldProductPrice = styled(OldProductPrice)`
    align-self: center;

    @media screen and (min-width: ${APP_CONTAINER_TAB_SIZE_WIDTH}px) {
        align-self: unset;
    }
`;

const PriceAndDiscount = function ({ className }) {
    return (
        <StyledPriceAndDiscountContainer className={className}>
            <StyledNewPriceAndDiscountContainer>
                <ProductPrice children={NEW_PPRODUCT_PRICE} />
                <StyledDiscountTag children={DISCOUNT_VALUE} />
            </StyledNewPriceAndDiscountContainer>
            <StyledOldProductPrice children={PREVIOUS_PRODUCT_PRICE} />
        </StyledPriceAndDiscountContainer>
    );
};

export default PriceAndDiscount;
