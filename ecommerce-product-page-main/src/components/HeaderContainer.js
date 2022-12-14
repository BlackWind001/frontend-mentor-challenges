import styled from 'styled-components';
import { APP_CONTAINER_MIN_WIDTH } from '@constants/style_constants';

const StyledHeaderContainer = styled.header`
    display: flex;
    flex-gap: 0.5 rem;
    padding: 1.5rem 1.125rem;

    @media screen and (min-width: ${APP_CONTAINER_MIN_WIDTH + 1}px) {
        padding: 0 0.5rem;
        border-bottom: 1px solid var(--header-bottom-border-color);

        & > * {
            margin-top: 2rem;
            margin-bottom: 2rem;
        }
    }
`;

export default StyledHeaderContainer;
