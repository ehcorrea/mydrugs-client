import { Story, Meta } from '@storybook/react';
import { AddShoppingCart } from '@styled-icons/material-outlined';

import Button from '.';
import { ButtonProps } from './types';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      name: 'content',
      type: 'string',
      defaultValue: 'Buy now',
    },
    size: {
      control: {
        type: 'select',
      },
      defaultValue: 'small',
    },
    fullWidth: {
      name: 'full width',
      control: {
        type: 'boolean',
      },
    },
    icon: {
      type: 'function',
    },
    onClick: { name: 'click' },
  },
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />;

WithIcon.args = {
  icon: <AddShoppingCart />,
};

export const AsLink: Story<ButtonProps> = (args) => <Button {...args} />;

AsLink.args = {
  as: 'a',
  children: 'Buy now',
  href: '/link',
  size: 'large',
};
