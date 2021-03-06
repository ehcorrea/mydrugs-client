import { Story, Meta } from '@storybook/react';
import Menu from '.';
import { MenuProps } from './types';

export default {
  title: 'PAGE/Menu',
  component: Menu,
  argTypes: {
    userName: {
      name: 'user name',
      type: 'string',
      defaultValue: '',
    },
  },
} as Meta;

export const Default: Story<MenuProps> = (args) => <Menu {...args} />;

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'mydrugs-dark',
  },
};
