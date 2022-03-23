import { InputHTMLAttributes } from 'react';
import { Colors } from 'types/colors';

export type LabelOptions = {
  text: string;
  labelFor?: string;
  color?: Colors;
};

export type CheckboxProps = {
  onCheck?: (status: boolean) => void;
  labelOptions?: LabelOptions;
  isChecked?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
