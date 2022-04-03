import { Story, Meta } from '@storybook/react';
import Heading from '.';
import { HeadingProps } from './types';

export default {
  title: 'STYLEGUIDE/Heading',
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
      defaultValue: 'white',
    },
    lineAdornment: {
      name: 'line adorment',
      control: {
        type: 'select',
      },
      defaultValue: '',
    },
    lineColor: {
      name: 'line color',
      control: {
        type: 'select',
      },
      defaultValue: 'primary',
    },
    size: {
      name: 'size',
      control: {
        type: 'select',
      },
      defaultValue: 'medium',
    },
  },
} as Meta;

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />;

Default.parameters = {
  backgrounds: {
    default: 'mydrugs-dark',
  },
};
