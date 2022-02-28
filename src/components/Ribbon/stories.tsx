import { Story, Meta } from '@storybook/react';
import Ribbon from '.';
import { RibbonProps } from './types';

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller',
  },
  argTypes: {
    children: {
      name: 'content',
    },
    backgroundColor: { name: 'background color' },
    size: {
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

export const Default: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888',
    }}
  >
    <Ribbon {...args} />
  </div>
);
