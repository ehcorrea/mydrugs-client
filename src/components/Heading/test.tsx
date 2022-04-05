import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Heading from '.';

describe('<Heading />', () => {
  it('should render white heading by default', () => {
    renderWithTheme(<Heading>My Drugs</Heading>);
    expect(screen.getByRole('heading', { name: /My Drugs/i })).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">My Drugs</Heading>);
    expect(screen.getByRole('heading', { name: /My Drugs/i })).toHaveStyle({
      color: '#030517',
    });
  });

  it('should render black heading with a line to the left side', () => {
    renderWithTheme(
      <Heading lineAdornment="left" lineColor="secondary">
        My Drugs
      </Heading>
    );
    expect(screen.getByRole('heading', { name: /My Drugs/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1',
    });
  });

  it('should render black heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineAdornment="bottom">My Drugs</Heading>);
    expect(screen.getByRole('heading', { name: /My Drugs/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: ':after',
      }
    );
  });

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">My Drugs</Heading>);
    expect(screen.getByRole('heading', { name: /My Drugs/i })).toHaveStyle({
      'font-size': '1.6rem',
    });

    expect(screen.getByRole('heading', { name: /My Drugs/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: ':after',
      }
    );
  });

  it('should render a heading with a huge size', () => {
    renderWithTheme(<Heading size="huge">My Drugs</Heading>);
    expect(screen.getByRole('heading', { name: /My Drugs/i })).toHaveStyle({
      'font-size': '5.2rem',
    });
  });

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineAdornment="bottom">
        My Drugs
      </Heading>
    );

    const heading = screen.getByRole('heading', { name: /My Drugs/i });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: ':after',
    });
  });

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineAdornment="bottom">
        My Drugs
      </Heading>
    );

    const heading = screen.getByRole('heading', { name: /My Drugs/i });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: ':after',
    });
  });
});
