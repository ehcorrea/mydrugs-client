import styled, { css, DefaultTheme } from 'styled-components';
import { darken } from 'polished';

import { WrapperProps } from './types';

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin: 0 0 0 ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      background: ${theme.colors.lightBg};
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal }) => css`
    align-items: center;
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    border-radius: ${theme.border.radius};
    border: none;
    color: ${theme.colors.white};
    cursor: pointer;
    display: inline-flex;
    font-family: ${theme.font.family};
    justify-content: center;
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${fullWidth && wrapperModifiers.fullWidth()}
    ${hasIcon && wrapperModifiers.withIcon(theme)}
    ${minimal && wrapperModifiers.minimal(theme)}
  `}
`;
