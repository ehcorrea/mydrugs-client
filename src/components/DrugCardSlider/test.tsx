import 'match-media-mock';

import { screen } from '@testing-library/react';

import DrugCardSlider from '.';
import { renderWithTheme } from 'utils/tests/helpers';
import { DrugCardProps } from 'components/DrugCard/types';

const DRUG_CARD_ITEMS: DrugCardProps[] = [
  {
    img: '/img/blue-punisher.jpg',
    price: 'R$ 30,00',
    promotionalPrice: 'R$ 15,00',
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

describe('<DrugCardSlider />', () => {
  it('should render horizontal slider', () => {
    const { container } = renderWithTheme(
      <DrugCardSlider items={DRUG_CARD_ITEMS} />
    );
    expect(container.querySelector('.slick-vertical')).not.toBeInTheDocument();
  });

  it('should render with one active item', () => {
    const { container } = renderWithTheme(
      <DrugCardSlider items={DRUG_CARD_ITEMS} />
    );
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(
      DRUG_CARD_ITEMS.length
    );
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
  });

  it('should render white arrows if color passed', () => {
    renderWithTheme(
      <DrugCardSlider items={DRUG_CARD_ITEMS} arrowColor="white" />
    );

    expect(screen.getByLabelText(/previous drugs/i)).toHaveStyle({
      color: '#FAFAFA',
    });
    expect(screen.getByLabelText(/next drugs/i)).toHaveStyle({
      color: '#FAFAFA',
    });
  });
});
