import styled from 'styled-components';
import { APP_CONTAINER_MIN_WIDTH } from '@constants/style_constants';

const StyledHeaderRightSection = styled.section`
    display: flex;
    gap: 1rem;

    @media screen and (min-width: ${APP_CONTAINER_MIN_WIDTH + 1}px) {
        gap: 2rem;
    }
`;

export default StyledHeaderRightSection;
