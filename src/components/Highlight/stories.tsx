import { Story, Meta } from '@storybook/react';
import Highlight from '.';
import HIGHLIGHT_MOCK from './mock';
import { HighlightProps } from './types';

export default {
  title: 'EXPOSITION/Highlight',
  component: Highlight,
  args: { ...HIGHLIGHT_MOCK },
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
