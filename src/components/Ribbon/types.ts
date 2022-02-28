import { Colors } from 'types/colors';

export type RibbonSizes = 'small' | 'normal';

export type RibbonProps = {
  children: React.ReactNode;
  backgroundColor?: Colors;
  color?: Colors;
  size?: RibbonSizes;
};
