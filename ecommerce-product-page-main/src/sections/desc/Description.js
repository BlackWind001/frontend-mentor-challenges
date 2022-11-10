import React from 'react';
import styled from 'styled-components';
import CompanyTag from '@components/CompanyTag';
import ProductHeading from '@components/ProductHeading';
import ProductDescription from '@components/ProductDescription';
import QMAndATCBWrapper from '@components/QMAndATCBWrapper';
import { APP_CONTAINER_TAB_SIZE_WIDTH } from '@constants/style_constants';
import { PRODUCT_DESC_TEXT, PRODUCT_OBJ, COMPANY_TAG_TEXT } from '@constants/product_constants';
import PriceAndDiscount from './PriceAndDiscount';
import ProductContext from '@contexts/ProductContext';

const StyledDescriptionContentSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    flex: 1;

    @media screen and (min-width: ${APP_CONTAINER_TAB_SIZE_WIDTH}px) {
        padding: 4rem 2rem 0rem 2rem;
    }
`;

const StyledCompanyTag = styled(CompanyTag)`
    margin-bottom: 1rem;

    @media screen and (min-width: ${APP_CONTAINER_TAB_SIZE_WIDTH}px) {
        margin-bottom: 1.5rem;
    }
`;

const StyledProductHeading = styled(ProductHeading)`
    margin-bottom: 2rem;
    margin-top: 0;

    @media screen and (min-width: ${APP_CONTAINER_TAB_SIZE_WIDTH}px) {
        margin-bottom: 3rem;
    }
`;

const StyledProductDescription = styled(ProductDescription)`
    margin-bottom: 2rem;
`;

const StyledPriceAndDiscount = styled(PriceAndDiscount)`
    margin-bottom: 2rem;
`;

export default function Description () {
    return (
        <StyledDescriptionContentSection>
            <ProductContext.Provider value={PRODUCT_OBJ.itemId}>
                {/* Company tag */}
                <StyledCompanyTag children={COMPANY_TAG_TEXT} />
                {/* Product heading */}
                <StyledProductHeading children={PRODUCT_OBJ.name} />
                {/* Product desc */}
                <StyledProductDescription children={PRODUCT_DESC_TEXT} />
                {/* Discount info */}
                <StyledPriceAndDiscount />
                {/* Interactive elements: quantity modifier and cart adder */}
                <QMAndATCBWrapper />
            </ProductContext.Provider>
        </StyledDescriptionContentSection>
    );
}
