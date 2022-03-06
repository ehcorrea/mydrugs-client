import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import * as BannerStyles from 'components/Banner/styles';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .slick-dots {
      align-items: center;
      display: flex !important;
      justify-content: center;
      list-style: none;
      margin-top: ${theme.spacings.small};

      li {
        align-items: center;
        background: ${theme.colors.white};
        border-radius: 100%;
        cursor: pointer;
        display: flex;
        height: 1.2rem;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        width: 1.2rem;

        &.slick-active {
          background: ${theme.colors.primary};
        }
      }

      button {
        cursor: pointer;
        height: 1.2rem;
        opacity: 0;
        width: 1.2rem;
      }
    }

    ${media.greaterThan('large')`
      ${BannerStyles.Wrapper} {
        margin: 0 auto;
        max-width: 104rem;
      }

      .slick-dots {
        flex-direction: column;
        height: 100%;
        margin: 0;
        position: absolute;
        right: 0;
        top: 0;

        li {
          margin: ${theme.spacings.xxsmall} 0;
        }
      }
    `}
  `}
`;
