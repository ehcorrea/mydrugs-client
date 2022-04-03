import styled, { css, DefaultTheme } from 'styled-components';
import { InputWrapperProps, WrapperProps } from './types';

const wrapperModifiers = {
  right: (theme: DefaultTheme) => css`
    flex-direction: row-reverse;
    ${Icon} {
      margin: 0 0 0 ${theme.spacings.xsmall};
    }
  `,

  left: (theme: DefaultTheme) => css`
    flex-direction: row;

    ${Icon} {
      margin: 0 ${theme.spacings.xsmall} 0 0;
    }
  `,

  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      color: ${theme.colors.gray};
      cursor: not-allowed;

      &::placeholder {
        color: currentColor;
      }
    }
  `,

  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }

    ${Label},
    ${Icon} {
      color: ${theme.colors.red};
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, hasError }) => css`
    ${disabled && wrapperModifiers.disabled(theme)}
    ${hasError && wrapperModifiers.error(theme)}
  `}
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, iconAlignment }) => css`
    background: ${theme.colors.lightGray};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    display: flex;
    padding: 0 ${theme.spacings.xsmall};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    ${wrapperModifiers[iconAlignment](theme)}
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    background: transparent;
    border: 0;
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    outline: none;
    padding: ${theme.spacings.xxsmall} 0;
    width: 100%;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    cursor: pointer;
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};

    & > svg {
      width: 100%;
    }
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font: ${theme.font.sizes.xsmall};
  `}
`;
