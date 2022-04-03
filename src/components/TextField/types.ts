import { InputHTMLAttributes } from 'react';
import { Colors } from 'types/colors';

type iconAlignment = 'left' | 'right';

export type LabelOptions = {
  color?: Colors;
  labelFor?: string;
  text: string;
};

export type IconOptions = {
  alignment?: iconAlignment;
  element: React.ReactNode;
};

export type TextFieldProps = {
  onInput?: (value: string) => void;
  labelOptions?: LabelOptions;
  initialValue?: string;
  iconOptions?: IconOptions;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type WrapperProps = { hasError?: boolean } & Pick<
  TextFieldProps,
  'disabled'
>;

export type InputWrapperProps = {
  iconAlignment: iconAlignment;
};
