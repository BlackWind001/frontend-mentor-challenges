import styled from 'styled-components';

const StyledContainer = styled.div`
    min-width: var(--app-container-min-width);
    max-width: var(--app-container-max-width);
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

export default StyledContainer;
