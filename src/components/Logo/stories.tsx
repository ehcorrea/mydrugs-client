import { Story, Meta } from '@storybook/react';
import Logo from '.';
import { LogoProps } from './types';

export default {
  title: 'STYLEGUIDE/Logo',
  component: Logo,
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      defaultValue: 'black',
    },
    size: {
      control: {
        type: 'select',
      },
      defaultValue: 'large',
    },
    hideOnMobile: {
      name: 'hide text on mobile',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as Meta;

export const Default: Story<LogoProps> = (args) => <Logo {...args} />;
