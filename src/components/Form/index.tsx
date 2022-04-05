import styled, { css } from 'styled-components';
import { darken } from 'polished';

import * as TextFieldStyles from 'components/TextField/styles';
import * as ButtonStyles from 'components/Button/styles';

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`;

export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-align: center;

    a {
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      color: ${theme.colors.secondary};
      margin: 0 0 0 ${theme.spacings.xxsmall};
      text-decoration: none;
      transition: color, border, ${theme.transition.fast};

      &:hover {
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
        color: ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`;
