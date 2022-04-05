import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as HeadingStyles from 'components/Heading/styles';
import * as LogoStyles from 'components/Logo/styles';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
  `}
`;

export const BannerBlock = styled.div`
  ${({ theme }) =>
    css`
      background-image: url('/img/auth-banner.jpg');
      background-position: center center;
      background-size: cover;
      padding: ${theme.spacings.xxlarge};
      position: relative;

      ${media.lessThan('medium')`
        display: none;
      `}

      &:after {
        background-color: ${theme.colors.black};
        bottom: 0;
        content: '';
        left: 0;
        opacity: 0.7;
        position: absolute;
        right: 0;
        top: 0;
      }
    `}
`;

export const BannerContent = styled.div`
  ${({ theme }) =>
    css`
      color: ${theme.colors.white};
      display: grid;
      grid-template: 1fr;
      height: 100%;
      justify-content: space-between;
      position: relative;
      z-index: ${theme.layers.base};

      a {
        width: fit-content;
        height: fit-content;
      }
    `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) =>
    css`
      font-weight: ${theme.font.light};
      font-size: ${theme.font.sizes.xxlarge};
      margin: ${theme.spacings.xsmall} 0 0 0;

      strong {
        color: ${theme.colors.primary};
      }
    `}
`;

export const Footer = styled.p`
  ${({ theme }) =>
    css`
      align-self: end;
      font-size: ${theme.font.sizes.xsmall};
      text-align: center;
    `}
`;

export const Content = styled.div`
  ${({ theme }) =>
    css`
      background-color: ${theme.colors.white};
      display: grid;
      align-items: center;
      justify-content: center;
    `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) =>
    css`
      width: 30rem;

      ${media.greaterThan('medium')`
        grid-template-columns: 36rem;
      `}

      ${LogoStyles.Wrapper} {
        margin: 0 auto ${theme.spacings.xxlarge};
      }

      ${HeadingStyles.Wrapper} {
        margin: 0 0 ${theme.spacings.medium} 0;
      }
    `}
`;
