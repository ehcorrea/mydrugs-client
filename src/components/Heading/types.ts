import React from 'react';
import { Theme } from 'types/style-components';

export type Colors = keyof Theme['colors'];

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineAdornment?: 'left' | 'bottom';
  size?: 'small' | 'medium';
  lineColor?: Colors;
};
