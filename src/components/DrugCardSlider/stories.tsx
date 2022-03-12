import { Story, Meta } from '@storybook/react';
import { DrugCardProps } from 'components/DrugCard/types';

import DrugCardSlider from '.';
import DRUG_CARD_MOCK from './mock';

export default {
  title: 'DrugCardSlider',
  component: DrugCardSlider,
  args: { items: DRUG_CARD_MOCK, arrowColor: 'white' },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'mydrugs-dark',
    },
  },
  argTypes: {
    arrowColor: {
      name: 'arrow color',
      control: 'select',
    },
  },
} as Meta;

export const Default: Story<DrugCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <DrugCardSlider items={args} {...args} />
  </div>
);
