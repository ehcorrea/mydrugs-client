import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Auth from '.';

describe('<Auth />', () => {
  it('should all components and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('ehcorrea 2022')).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: /my drugs/i })).toHaveLength(2);
    expect(
      screen.getByRole('heading', {
        name: /all your favorite drugs in one place/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /my drugs is the best and most complete drugs platform/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /Auth Title/i,
      })
    ).toBeInTheDocument();
  });
});
