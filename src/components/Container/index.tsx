import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: ${theme.grid.container};
    width: 100%;
    padding: 0 calc(${theme.grid.gutter} / 2);
  `}
`;

export default Container;
