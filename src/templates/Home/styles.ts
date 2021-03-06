import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as HeadingStyles from 'components/Heading/styles';
import * as HighlightStyles from 'components/Highlight/styles';

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);

    ${media.greaterThan('medium')`
      margin: ${theme.spacings.large} 0;
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`;

export const SectionNews = styled.div`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${media.greaterThan('large')`
      margin-top: -13rem;
    `}

    ${media.greaterThan('medium')`
      background-color: ${theme.colors.lightBg};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
      margin-bottom: 0;
      padding-bottom: 10rem;
      padding-top: 14rem;

      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black};
      }
    `}
  `}
`;

export const SectionMostPopular = styled.div``;

export const SectionUpcoming = styled.div`
  ${({ theme }) => css`
    ${HighlightStyles.Wrapper} {
      margin-top: calc(${theme.spacings.xlarge} * 2);
    }
  `}
`;
