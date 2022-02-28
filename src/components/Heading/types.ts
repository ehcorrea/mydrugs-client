import React from 'react';
import { Colors } from 'types/colors';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineAdornment?: 'left' | 'bottom';
  size?: 'small' | 'medium';
  lineColor?: Colors;
};
