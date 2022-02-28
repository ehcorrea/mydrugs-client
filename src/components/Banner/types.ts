import { RibbonProps } from 'components/Ribbon/types';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: RibbonProps;
};

export type ImageProps = {
  src: string;
};
