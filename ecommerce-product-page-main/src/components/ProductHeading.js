import styled from 'styled-components';
import { APP_CONTAINER_TAB_SIZE_WIDTH } from '@constants/style_constants';

const StyledProductHeading = styled.h1`
    font-weight: var(--font-weight-bold);
    font-size: 2rem;
    overflow-wrap: normal;

    @media screen and (min-width: ${APP_CONTAINER_TAB_SIZE_WIDTH}px) {
        font-size: 3rem;
    }
`;

export default StyledProductHeading;
