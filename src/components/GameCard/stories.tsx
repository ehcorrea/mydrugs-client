import { Story, Meta } from '@storybook/react';
import GameCard from '.';
import { GameCardProps } from './types';

export default {
  title: 'GameCard',
  component: GameCard,
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
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: { content: '50% OFF', size: 'small' },
  promotionalPrice: 'R$ 15,00',
};
