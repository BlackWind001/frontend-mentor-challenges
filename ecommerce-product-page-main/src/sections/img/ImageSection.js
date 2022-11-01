import React from 'react';
import styled from 'styled-components';
import {
    APP_CONTAINER_TAB_SIZE_WIDTH,
    APP_CONTAINER_MIN_WIDTH
} from '@constants/style_constants';
import Image from '@components/Image';
import ImageCarousel from '@components/ImageCarousel';
import imgDataArr from './productImages';
import ThumbnailImageViewer from '@components/ThumbnailImageViewer';

const StyledImageSection = styled.section`
    @media screen and (max-width: ${APP_CONTAINER_MIN_WIDTH}px) {
        height: 300px;
    }
    @media screen and (min-width: ${APP_CONTAINER_TAB_SIZE_WIDTH}px) {
        flex: 1;
        padding-top: 3rem;
    }
`;

const StyledImageCarousel = styled(ImageCarousel)`
    @media screen and (min-width: ${APP_CONTAINER_TAB_SIZE_WIDTH}px) {
        display: none;
    }
`;

const StyledThumbnailImageViewer = styled(ThumbnailImageViewer)`
    @media screen and (max-width: ${APP_CONTAINER_TAB_SIZE_WIDTH}px) {
        display: none;
    }
`;

export default function ImageSection () {
    return (
        <StyledImageSection>
            <StyledThumbnailImageViewer imgDataArr={imgDataArr} />
            <StyledImageCarousel imgDataArr={imgDataArr} />
        </StyledImageSection>
    );
}
