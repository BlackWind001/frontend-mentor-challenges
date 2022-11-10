import styled from 'styled-components';
import { APP_CONTAINER_MIN_WIDTH } from '@constants/style_constants';

const StyledHeaderLeftSection = styled.section`
    display: flex;
    gap: 1rem;
    flex-grow: 1;

    @media screen and (min-width: ${APP_CONTAINER_MIN_WIDTH + 1}px) {
        gap: 2rem;
        margin-top: 0;
        margin-bottom: 0;

        & > * {
            margin-top: 2rem;
            margin-bottom: 2rem;
        }
    }
`;

export default StyledHeaderLeftSection;
