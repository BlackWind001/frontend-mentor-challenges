import React from 'react';
import styled from 'styled-components';
import Overlay from './Overlay';
import Image from './Image';
import IconClose from '@images/icon-close.svg';
import IconPrevious from '@images/icon-previous.svg';
import IconNext from '@images/icon-next.svg';

const StyledOverlay = styled(Overlay)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledOverlayImageViewerContainer = styled.div`
    width: 100%;
    max-width: 35rem;
`;

const StyledCloseButton = styled.button`
    display: block;
    background-color: var(--neutral-white);
    border: none;
    height: 1.25rem;
    width: 1.25rem;
    padding: 0.25rem;
    margin: 0 0 1rem auto;
    mask: url(${IconClose}) no-repeat center;
    mask-size: contain;
    cursor: pointer;

    &:hover {
        background-color: var(--primary-orange);
    }
`;

const StyledMainOverlayImageContainer = styled.div`
    width: 100%;
    position: relative;
    border-radius: 1rem;
    margin-bottom: 2rem;
`;

const StyledMainImage = styled(Image)`
    border-radius: inherit;
`;

const StyledCarouselButton = styled.button`
    position: absolute;
    top: 45%;
    height: 3rem;
    width: 3rem;
    display: flex;
    align-items: center;
    padding: 0;
    background-color: var(--neutral-white);
    border: none;
    border-radius: 3rem;
    cursor: pointer;

    & > span {
        height: 1rem;
        flex-grow: 1;
        background-color: var(--neutral-black);
    }

    &:hover {
        & > span {
            background-color: var(--primary-orange);
        }
    }
`;

const StyledCarouselLeftButton = styled(StyledCarouselButton)`
    left: -1.5rem;
    & > span {
        mask: url(${IconPrevious}) no-repeat center;
    }
`;

const StyledCarouselRightButton = styled(StyledCarouselButton)`
    right: -1.5rem;
    & > span {
        mask: url(${IconNext}) no-repeat center;
    }
`;

const StyledOverlayThumbnailsContainer = styled.div`
    height: 5rem;
    max-width: 30rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
`;

const StyledThumbnail = styled.div`
    width: 5rem;
    height: 100%;
    border-radius: 0.5rem;
    background-size: 100% 100%;
    cursor: pointer;

    ${({ img }) => {
        return `background-image: url(${img});`;
    }}

    ${({isActive}) => {
        if (isActive) {
            return `
                border: 2px solid var(--primary-orange);
            `;
        }
    }}

    & div {
        width: 100%;
        height: 100%;
        background-color: var(--neutral-white);
        opacity: 0;
        border-radius: inherit;

        &:hover {
            opacity: 0.7;
        }

        ${({isActive}) => {
            if (isActive) {
                return `
                    opacity: 0.7;
                `;
            }
        }}
    }
`;

function OverlayImageCarouselWithThumbnail ({ imgDataArr }) {
    const [currentImgIndex, setCurrentImgIndex] = React.useState(0);

    const switchToIndex = function (index) {
        if (!imgDataArr[index] || !imgDataArr[index].url) {
            return;
        }

        setCurrentImgIndex(index);
    }
    return (
        <>
            <StyledMainOverlayImageContainer>
                <StyledMainImage src={imgDataArr[currentImgIndex].url} alt={imgDataArr[currentImgIndex].alt} />
                <StyledCarouselLeftButton onClick={() => { switchToIndex(currentImgIndex - 1); }}>
                    <span />
                </StyledCarouselLeftButton>
                <StyledCarouselRightButton onClick={() => { switchToIndex(currentImgIndex + 1); }}>
                    <span />
                </StyledCarouselRightButton>
            </StyledMainOverlayImageContainer>
            <StyledOverlayThumbnailsContainer>
                {
                    imgDataArr.map((imgData, index) => {
                        const { thumbnailUrl } = imgData;
                        return (
                            <StyledThumbnail
                                onClick={() => { switchToIndex(index); }}
                                isActive={currentImgIndex === index}
                                img={thumbnailUrl}
                                key={thumbnailUrl}
                            >
                                <div />
                            </StyledThumbnail>
                        );
                    })
                }
            </StyledOverlayThumbnailsContainer>
        </>
    );
}

function OverlayImageViewer ({ onClose, imgDataArr }) {
    if (!Array.isArray(imgDataArr) || imgDataArr.length <= 0) {
        return null;
    }

    return (
        <StyledOverlay>
            <StyledOverlayImageViewerContainer>
                <StyledCloseButton onClick={onClose} />
                <OverlayImageCarouselWithThumbnail {...{ imgDataArr }} />
            </StyledOverlayImageViewerContainer>
        </StyledOverlay>
    );
};

export default OverlayImageViewer;
