import { InputHTMLAttributes } from 'react';
import { Colors } from 'types/colors';

export type LabelOptions = {
  color?: Colors;
  labelFor?: string;
  text: string;
};
type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
  labelOptions?: LabelOptions;
  onCheck?: (value?: RadioValue) => void;
  value?: RadioValue;
} & InputHTMLAttributes<HTMLInputElement>;
