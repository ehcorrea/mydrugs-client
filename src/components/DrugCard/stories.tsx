import { Story, Meta } from '@storybook/react';
import DrugCard from '.';
import { DrugCardProps } from './types';

export default {
  title: 'EXPOSITION/Drug Card',
  component: DrugCard,
  args: {
    img: '/img/blue-punisher.jpg',
    price: 'R$ 30,00',
    promotionalPrice: '',
    sourceData: 'DrugsData',
    title: 'Blue Punisher',
    favorite: false,
  },
  argTypes: {
    favorite: {
      control: {
        type: 'boolean',
      },
    },
    onFav: {
      action: 'clicked',
    },
    promotionalPrice: {
      name: 'promotional price',
    },
    sourceData: {
      name: 'source data',
    },
  },
  parameters: {
    backgrounds: {
      default: 'mydrugs-dark',
    },
  },
} as Meta;

export const Default: Story<DrugCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <DrugCard {...args} />
  </div>
);

export const WithRibbon: Story<DrugCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <DrugCard {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: { content: '50% OFF', size: 'small' },
  promotionalPrice: 'R$ 15,00',
};
