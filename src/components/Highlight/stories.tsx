import { Story, Meta } from '@storybook/react';
import Highlight from '.';
import { HighlightProps } from './types';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'MDMA for good party',
    subtitle: 'Come see MDMA trips',
    backgroundImage: '/img/mdma-img.jpg',
    button: {
      label: 'Buy now',
      link: '/mdma',
    },
  },
  argTypes: {
    alignment: {
      control: {
        type: 'select',
      },
    },
    backgroundImage: {
      name: 'background image',
    },
  },
} as Meta;

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
);

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
);

WithFloatImage.args = {
  floatImage: '/img/mdma-float.png',
};

WithFloatImage.argTypes = {
  floatImage: {
    name: 'float image',
  },
};
