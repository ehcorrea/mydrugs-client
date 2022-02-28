import styled, { css, DefaultTheme } from 'styled-components';
import { darken } from 'polished';

import { RibbonProps } from './types';

const wapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 2.6rem;
    padding: 0 ${theme.spacings.xsmall};
    right: -1.5rem;

    &:before {
      border-right-width: 1.5rem;
      border-top-width: 0.7rem;
      top: 2.6rem;
    }
  `,

  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 3.6rem;
    padding: 0 ${theme.spacings.small};
    right: -2rem;

    &:before {
      border-right-width: 2rem;
      border-top-width: 1rem;
      top: 3.6rem;
    }
  `,
};

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, backgroundColor, color, size }) => css`
    align-items: center;
    background-color: ${theme.colors[backgroundColor!]};
    color: ${theme.colors[color!]};
    display: flex;
    font-weight: ${theme.font.bold};
    position: absolute;
    top: ${theme.spacings.xsmall};

    &:before {
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
      border-left-color: ${darken(0.2, theme.colors[backgroundColor!])};
      border-left-width: 0rem;
      border-right-color: transparent;
      border-style: solid;
      border-top-color: ${darken(0.2, theme.colors[backgroundColor!])};
      content: '';
      position: absolute;
      right: 0;
    }

    ${wapperModifiers[size!](theme)}
  `}
`;
