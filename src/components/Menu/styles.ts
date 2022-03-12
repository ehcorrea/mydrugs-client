import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { MenuFullProps } from './types';

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    height: 2.4rem;
    width: 2.4rem;
  `}
`;

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  `}
`;

export const MenuGrounp = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    background-color: ${theme.colors.white};
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    left: 0;
    opacity: ${Number(isOpen)};
    overflow: hidden;
    pointer-events: ${isOpen ? 'all' : 'none'};
    position: fixed;
    right: 0;
    top: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: ${theme.layers.menu};

    > svg {
      cursor: pointer;
      height: 2.4rem;
      margin: ${theme.spacings.xsmall};
      position: absolute;
      right: 0;
      top: 0;
      width: 2.4rem;
    }

    ${MenuNav} {
      align-items: center;
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: center;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`;

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
			margin-left: ${theme.spacings.small};
		`}
  `}
`;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    position: relative;
    text-align: center;
    text-decoration: none;

    &:hover {
      &::after {
        animation: hoverAnimation 0.2s forwards;
        background-color: ${theme.colors.primary};
        content: '';
        display: block;
        height: 0.3rem;
        position: absolute;
      }

      @keyframes hoverAnimation {
        from {
          left: 50%;
          width: 0;
        }
        to {
          left: 0;
          width: 100%;
        }
      }
    }
  `}
`;

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      font-size: ${theme.font.sizes.xsmall};
      margin: ${theme.spacings.xxsmall} 0;
    }
  `}
`;

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    border-bottom: 0.2rem solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    text-decoration: none;
  `}
`;
