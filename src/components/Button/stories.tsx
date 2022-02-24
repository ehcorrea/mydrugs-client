import { Story, Meta } from '@storybook/react';
import { AddShoppingCart } from '@styled-icons/material-outlined';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    size: {
      control: { type: 'select' },
    },
    fullWidth: {
      name: 'full width',
      type: 'boolean',
    },
    icon: {
      type: 'function',
    },
  },
} as Meta;

export const Default: Story = (args) => <Button {...args} />;

Default.args = {
  children: 'Buy now',
};

export const WithIcon: Story = (args) => <Button {...args} />;

WithIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />,
};
