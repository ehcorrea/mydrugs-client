import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import 'jest-styled-components';

import Logo from '.';

describe('<Logo />', () => {
  it('should render white label by default', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/My Drugs/i).parentElement).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render black when color is passed', () => {
    renderWithTheme(<Logo color="black" />);
    expect(screen.getByLabelText(/My Drugs/i).parentElement).toHaveStyle({
      color: '#030517',
    });
  });

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo color="black" />);
    expect(screen.getByLabelText(/My Drugs/i).parentElement).toHaveStyle({
      width: '8rem',
    });
  });

  it('should render a big logo', () => {
    renderWithTheme(<Logo size="large" />);
    expect(screen.getByLabelText(/My Drugs/i).parentElement).toHaveStyle({
      width: '11rem',
    });
  });

  it('should render a bigger without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />);
    expect(screen.getByLabelText(/My Drugs/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)',
      }
    );
  });
});
