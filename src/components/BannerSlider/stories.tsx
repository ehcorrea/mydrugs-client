import { Story, Meta } from '@storybook/react';

import BannerSlider from '.';
import BANNER_SLIDER_MOCK from './mock';
import { BannerSliderProps } from './types';

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items: BANNER_SLIDER_MOCK },
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
