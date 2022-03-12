import { DrugCardProps } from 'components/DrugCard/types';

const DRUG_CARD_MOCK: DrugCardProps[] = [
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
    img: '/img/tekashi69.jpg',
    price: 'R$ 35,00',
    sourceData: 'SaferParty.ch',
    title: 'Tekashi69',
  },
  {
    img: '/img/bowser.jpg',
    price: 'R$ 39,99',
    sourceData: 'SaferParty.ch',
    title: 'Bowser',
    ribbon: {
      content: 'GAMES EDITION',
    },
  },
  {
    img: '/img/donkey-kong.jpg',
    price: 'R$ 39,99',
    promotionalPrice: '',
    sourceData: 'DrugsData',
    title: 'Donkey Kong',
    ribbon: {
      content: 'GAMES EDITION',
    },
  },
  {
    img: '/img/heisenberg.jpg',
    price: 'R$ 49,99',
    promotionalPrice: '',
    sourceData: 'SaferParty.ch',
    title: 'Heisenberg',
  },
  {
    img: '/img/instagram.jpg',
    price: 'R$ 25,00',
    promotionalPrice: 'R$ 20,00',
    sourceData: 'DrugsData',
    title: 'Instagram',
    ribbon: {
      content: '20% OFF',
    },
  },
];

export default DRUG_CARD_MOCK;
