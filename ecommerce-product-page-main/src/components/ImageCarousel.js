import React from 'react';
import styled from 'styled-components';
import IconPrevious from '@images/icon-previous.svg';
import IconNext from '@images/icon-next.svg';
import Image from './Image';

const StyledCarouselWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;

const StyledButton = styled.button`
    position: absolute;
    top: 50%;
    display: flex;
    background-color: var(--neutral-white);
    height: 2rem;
    width: 2rem;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    

    & span {
        height: 0.7rem;
        align-self: center;
        flex-grow: 1;
        background-color: var(--neutral-black);
        mask-size: contain;

        &:hover {
            background-color: var(--primary-orange);
        }
    }
`;

const StyledPrevButton = styled(StyledButton)`
    left: 1rem;

    & span {
        mask: url(${IconPrevious}) no-repeat center;
    }
`;

const StyledNextButton = styled(StyledButton)`
    right: 1rem;

    & span {
        mask: url(${IconNext}) no-repeat center;
    }
`;

function ImageCarousel ({ imgDataArr, className }) {
    const [currentImgIndex, setCurrentImgIndex] = React.useState(0);

    const switchToIndex = function (index) {
        if (!imgDataArr[index] || !imgDataArr[index].url) {
            return;
        }

        setCurrentImgIndex(index);
    }

    if (!Array.isArray(imgDataArr) || imgDataArr.length <= 0) {
        return null;
    }

    return (
        <StyledCarouselWrapper className={className}>
            <Image src={imgDataArr[currentImgIndex].url} alt={imgDataArr[currentImgIndex].alt} />
            <StyledPrevButton onClick={() => { switchToIndex(currentImgIndex - 1); }}>
                <span />
            </StyledPrevButton>
            <StyledNextButton onClick={() => { switchToIndex(currentImgIndex + 1); }}>
                <span />
            </StyledNextButton>
        </StyledCarouselWrapper>
    );
}

export default ImageCarousel;
