import styled, { css } from 'styled-components';
import { LabelOptions } from './types';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label<Pick<LabelOptions, 'color'>>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
    cursor: pointer;
    line-height: 1.8rem;
    padding-left: ${theme.spacings.xxsmall};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    align-items: center;
    appearance: none;
    border-radius: 0.2rem;
    border: 0.2rem solid ${theme.colors.darkGray};
    cursor: pointer;
    display: flex;
    height: 1.8rem;
    justify-content: center;
    outline: none;
    position: relative;
    transition: background border ${theme.transition.fast};
    width: 1.8rem;

    &:before {
      border: 0.2rem solid ${theme.colors.white};
      border-left: 0;
      border-top: 0;
      content: '';
      height: 0.9rem;
      opacity: 0;
      position: absolute;
      top: 0.1rem;
      transform: rotate(45deg);
      transition: ${theme.transition.fast};
      width: 0.6rem;
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      background: ${theme.colors.primary};
      border-color: ${theme.colors.primary};

      &:before {
        opacity: 1;
      }
    }
  `}
`;
