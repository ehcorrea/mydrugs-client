import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { WrapperProps } from './types';

export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, arrowColor }) => css`
    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}

    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide > div {
      flex: 1 0 auto;
      height: 100%;
      margin: 0 ${theme.spacings.xxsmall};
    }

    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }

    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};
      }

      .slick-list {
        margin: 0 -${theme.spacings.xsmall};
      }
    `}

    .slick-prev,
    .slick-next {
      color: ${theme.colors[arrowColor!]};
      cursor: pointer;
      display: block;
      height: 2.5rem;
      padding: 0;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      width: 2.5rem;
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`;
