import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as RibbonStyles from 'components/Ribbon/styles';

import { ImageProps } from './types';

export const Wrapper = styled.main`
  position: relative;

  ${media.lessThan('large')`
      ${RibbonStyles.Wrapper} {
        right: 0;

        &:before {
          display: none;
        }
      }
  `}

  ${media.greaterThan('medium')`
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  `}
`;

export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    background-color: ${theme.colors.lightGray};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
    height: 23rem;
    width: 100%;

    ${media.greaterThan('medium')`
      height: 58rem;
    `}
  `}
`;

export const Caption = styled.div`
  ${({ theme }) => css`
    background-color: rgba(0, 0, 0, 0.7);
    padding: ${theme.spacings.small};
    width: 100%;

    ${media.greaterThan('medium')`
      border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
      bottom: 0;
      left: 0;
      padding: ${theme.spacings.large};
      position: absolute;
    `}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xsmall};

    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;
