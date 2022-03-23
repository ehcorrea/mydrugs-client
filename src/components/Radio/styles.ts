import styled, { css } from 'styled-components';
import { LabelOptions } from './types';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    align-items: center;
    appearance: none;
    background: transparent;
    border-radius: 50%;
    border: 0.2rem solid ${theme.colors.primary};
    cursor: pointer;
    display: flex;
    height: 1.8rem;
    justify-content: center;
    outline: none;
    transition: background ${theme.transition.fast};
    width: 1.8rem;

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:before {
      background: ${theme.colors.primary};
      border-radius: 50%;
      content: '';
      height: 0.8rem;
      opacity: 0;
      position: absolute;
      transition: opacity ${theme.transition.fast};
      width: 0.8rem;
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`;

export const Label = styled.label<Pick<LabelOptions, 'color'>>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
    cursor: pointer;
    line-height: 1;
    padding-left: ${theme.spacings.xxsmall};
  `}
`;
