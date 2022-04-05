import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    display: block;
    font-size: ${theme.font.sizes.small};
    text-align: right;
    text-decoration: none;

    &:hover {
      color: ${lighten(0.2, theme.colors.black)};
    }
  `}
`;
