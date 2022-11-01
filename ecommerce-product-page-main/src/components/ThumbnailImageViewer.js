import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import OverlayImageViewer from './OverlayImageViewer';

const StyledThumbnailImageViewerWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const StyledMainImage = styled(Image)`
    display: block;
    max-inline-size: 80%;
    block-size: auto;
    margin: 0 auto;
    border-radius: 1rem;
    cursor: pointer;
`;

const StyledThumbnailsSection = styled.section`
    margin-left: 10%;
    margin-right: 10%;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
`;

const StyledThumbnail = styled.div`
    width: 5rem;
    height: 5rem;
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

        ${({isActive}) => {
            if (isActive) {
                return `
                    opacity: 0.7;
                `;
            }
        }}
    }
`;

function ThumbnailImageViewer ({ imgDataArr, className }) {
    const [activeImageIndex, setActiveImageIndex] = React.useState(0);
    const [showOverlayImageViewer, setShowOverlayImageViewer] = React.useState(false);

    if (!Array.isArray(imgDataArr) || imgDataArr.length <= 0) {
        return null;
    }

    const switchActiveImageIndex = function (index) {
        if (
            (index!==0 && !index) ||
            !imgDataArr[index]||
            !(imgDataArr[index].url &&
                imgDataArr[index].thumbnailUrl)
        ) {
            return;
        }

        setActiveImageIndex(index);
    }

    const openOverlayImageViewer = function () { setShowOverlayImageViewer(true); };
    const closeOverlayImageViewer = function () { setShowOverlayImageViewer(false); };

    return (
        <StyledThumbnailImageViewerWrapper className={className}>
            <StyledMainImage onClick={openOverlayImageViewer} src={imgDataArr[activeImageIndex].url} />
            <StyledThumbnailsSection>
                {
                    imgDataArr.map((imgData, index) => {
                        const { thumbnailUrl } = imgData;
                        return (
                            <StyledThumbnail
                                onClick={() => { switchActiveImageIndex(index); }}
                                isActive={activeImageIndex === index}
                                img={thumbnailUrl}
                                key={thumbnailUrl}
                            >
                                <div />
                            </StyledThumbnail>
                        );
                    })
                }
            </StyledThumbnailsSection>
            {
                showOverlayImageViewer &&
                <OverlayImageViewer onClose={closeOverlayImageViewer} imgDataArr={imgDataArr} />
            }
        </StyledThumbnailImageViewerWrapper>
    );
}

export default ThumbnailImageViewer;
