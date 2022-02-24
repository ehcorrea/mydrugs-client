import { Story, Meta } from '@storybook/react';
import Heading from '.';
import { HeadingProps } from './types';

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string',
      defaultValue: 'Most Populars',
    },
    color: {
      control: {
        type: 'select',
      },
      defaultValue: 'black',
    },
    lineAdornment: {
      name: 'line adorment',
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />;
