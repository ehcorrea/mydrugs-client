import { Story, Meta } from '@storybook/react';
import { BannerProps } from 'components/Banner/types';

import BannerSlider from '.';
import { BannerSliderProps } from './types';

const BANNER_SLIDER_ITEMS: BannerProps[] = [
  {
    img: 'https://picsum.photos/1042/580',
    title: 'LSD / MDMA / ECSTASY',
    subtitle: '<p>All drugs <strong>avaible</strong> now',
    buttonLabel: 'Buy now',
    buttonLink: '/drugs/drug_slug',
    ribbon: {
      children: 'Bestselling',
    },
  },
  {
    img: 'https://picsum.photos/1042/580',
    title: 'LSD / MDMA / ECSTASY',
    subtitle: '<p>All drugs <strong>avaible</strong> now',
    buttonLabel: 'Buy now',
    buttonLink: '/drugs/drug_slug',
  },
  {
    img: 'https://picsum.photos/1042/580',
    title: 'LSD / MDMA / ECSTASY',
    subtitle: '<p>All drugs <strong>avaible</strong> now',
    buttonLabel: 'Buy now',
    buttonLink: '/drugs/drug_slug',
  },
];

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items: BANNER_SLIDER_ITEMS },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'mydrugs-dark',
    },
  },
} as Meta;

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
);
