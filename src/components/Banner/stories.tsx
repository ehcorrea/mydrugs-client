import { Story, Meta } from '@storybook/react';
import BANNER_SLIDER_MOCK from 'components/BannerSlider/mock';
import Banner from '.';
import { BannerProps } from './types';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    ...BANNER_SLIDER_MOCK[0],
    ribbon: null,
  },
  parameters: {
    layout: 'fullscrenn',
  },
  argTypes: {
    buttonLabel: {
      name: 'button label',
    },
    buttonLink: {
      name: 'button link',
    },
    ribbon: {
      description: 'You can edit this using the Ribbon section attributes',
    },
  },
} as Meta;

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
);

export const WithRibbon: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: {
    children: '20% OFF',
    size: 'normal',
    backgroundColor: 'primary',
    color: 'white',
  },
};

WithRibbon.argTypes = {
  ribbon: {
    description: 'You can edit this using the Ribbon section attributes',
  },
};
