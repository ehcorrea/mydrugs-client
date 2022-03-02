import styled, { css, DefaultTheme } from 'styled-components';
import { PriceProps } from './types';

export const Wrapper = styled.article`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    width: 100%;
  `}
`;

export const ImageBox = styled.div`
  animation: placeholderShimmer 1s linear infinite forwards;
  background-size: 80rem 14rem;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  height: 14rem;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    margin: ${theme.spacings.xsmall};
    position: relative;
  `}
`;

export const Info = styled.div`
  max-width: calc(100% - 2.5rem);
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    line-height: ${theme.font.sizes.medium};
  `}
`;

export const Developer = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
  `}
`;

export const FavButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    cursor: pointer;
    position: absolute;
    right: 0;
    top: -0.5rem;

    svg {
      width: 2.5rem;
    }
  `}
`;

export const BuyBox = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin-top: ${theme.spacings.xxsmall};
  `}
`;

const priceModifiers = {
  default: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    margin-right: calc(${theme.spacings.xxsmall} / 2);
    padding: 0 ${theme.spacings.xxsmall};
  `,

  promotional: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    margin-right: ${theme.spacings.xsmall};
    text-decoration: line-through;
  `,
};

export const Price = styled.div<PriceProps>`
  ${({ theme, isPromotional }) => css`
    align-items: center;
    display: inline-flex;
    font-weight: ${theme.font.bold};
    height: 3rem;

    ${!isPromotional && priceModifiers.default(theme)}
    ${isPromotional && priceModifiers.promotional(theme)}
  `}
`;
