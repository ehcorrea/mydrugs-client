import { Story, Meta } from '@storybook/react';
import Banner from '.';
import { BannerProps } from './types';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://picsum.photos/1042/580',
    title: 'LSD / MDMA / ECSTASY',
    subtitle: '<p>All drugs <strong>avaible</strong> now',
    buttonLabel: 'Buy now',
    buttonLink: '/drugs/drug_slug',
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
  },
} as Meta;

export const Default: Story<BannerProps> = (args) => <Banner {...args} />;
