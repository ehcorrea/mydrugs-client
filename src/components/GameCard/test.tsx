import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameCard from '.';
import { GameCardProps } from './types';

const GAMECARD_PROPS: GameCardProps = {
  img: '/img/blue-punisher.jpg',
  price: 'R$ 30,00',
  sourceData: 'DrugsData',
  title: 'Blue Punisher',
};

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...GAMECARD_PROPS} />);
    expect(
      screen.getByRole('heading', { name: /blue punisher/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /DrugsData/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /blue punisher/i })).toHaveAttribute(
      'src',
      '/img/blue-punisher.jpg'
    );
    expect(
      screen.getByLabelText(/add blue punisher to wishlist/i)
    ).toBeInTheDocument();
  });

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...GAMECARD_PROPS} />);
    const price = screen.getByText('R$ 30,00');
    expect(price).not.toHaveStyle({
      textDecoration: 'line-through',
    });
    expect(price).toHaveStyle({
      backgroundColor: '#3CD3C1',
    });
  });

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(
      <GameCard {...GAMECARD_PROPS} promotionalPrice="R$ 15,00" />
    );
    expect(screen.getByText('R$ 30,00')).toHaveStyle({
      textDecoration: 'line-through',
    });
    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through',
    });
  });

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...GAMECARD_PROPS} favorite />);
    expect(
      screen.getByLabelText(/remove blue punisher to wishlist/i)
    ).toBeInTheDocument();
  });

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn();
    renderWithTheme(<GameCard {...GAMECARD_PROPS} favorite onFav={onFav} />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(onFav).toBeCalled();
  });

  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...GAMECARD_PROPS}
        ribbon={{
          content: '50% OFF',
          size: 'small',
          backgroundColor: 'secondary',
        }}
      />
    );

    const ribbon = screen.getByText('50% OFF');
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' });
  });
});
