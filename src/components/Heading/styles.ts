import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { HeadingProps, Colors } from './types';

const wrapperModifiers = {
  lineAdornment: {
    left: (theme: DefaultTheme, lineColor: Colors) => css`
      border-left: 0.7rem solid ${theme.colors[lineColor]};
      padding-left: ${theme.spacings.xxsmall};
    `,

    bottom: (theme: DefaultTheme, lineColor: Colors) => css`
      position: relative;
      margin-bottom: ${theme.spacings.medium};

      &:after {
        content: '';
        border-bottom: 0.5rem solid ${theme.colors[lineColor]};
        bottom: -1rem;
        left: 0;
        position: absolute;
        width: 5rem;
      }
    `,
  },

  size: {
    small: (theme: DefaultTheme) => css`
      font-size: ${theme.font.sizes.medium};

      &:after {
        width: 3rem;
      }
    `,

    medium: (theme: DefaultTheme) => css`
      font-size: ${theme.font.sizes.xlarge};

      ${media.greaterThan('medium')` 
        font-size: ${theme.font.sizes.xxlarge};
      `}
    `,
  },
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineAdornment, size, lineColor }) => css`
    color: ${theme.colors[color!]};

    ${!!lineAdornment &&
    wrapperModifiers.lineAdornment[lineAdornment!](theme, lineColor!)}
    ${!!size && wrapperModifiers.size[size!](theme)}
  `}
`;
