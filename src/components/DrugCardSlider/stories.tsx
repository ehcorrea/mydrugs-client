import { Story, Meta } from '@storybook/react';
import { DrugCardProps } from 'components/DrugCard/types';

import DrugCardSlider from '.';

const DRUG_CARD_ITEMS: DrugCardProps[] = [
  {
    img: '/img/blue-punisher.jpg',
    price: 'R$ 30,00',
    promotionalPrice: 'R$ 15,00',
    sourceData: 'DrugsData',
    title: 'Blue Punisher',
    ribbon: {
      content: '50% OFF',
    },
  },
  {
    img: '/img/blue-punisher.jpg',
    price: 'R$ 30,00',
    promotionalPrice: '',
    sourceData: 'DrugsData',
    title: 'Blue Punisher',
  },
  {
    img: '/img/blue-punisher.jpg',
    price: 'R$ 30,00',
    promotionalPrice: '',
    sourceData: 'DrugsData',
    title: 'Blue Punisher',
    favorite: true,
  },
  {
    img: '/img/blue-punisher.jpg',
    price: 'R$ 30,00',
    promotionalPrice: '',
    sourceData: 'DrugsData',
    title: 'Blue Punisher',
    ribbon: {
      content: 'PRE ORDER',
    },
    favorite: true,
  },
  {
    img: '/img/blue-punisher.jpg',
    price: 'R$ 30,00',
    promotionalPrice: '',
    sourceData: 'DrugsData',
    title: 'Blue Punisher',
  },
  {
    img: '/img/blue-punisher.jpg',
    price: 'R$ 30,00',
    promotionalPrice: '',
    sourceData: 'DrugsData',
    title: 'Blue Punisher',
  },
];

export default {
  title: 'DrugCardSlider',
  component: DrugCardSlider,
  args: { items: DRUG_CARD_ITEMS, arrowColor: 'white' },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
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
