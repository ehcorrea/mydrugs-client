import { screen } from '@testing-library/react';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';

import Container from '.';

describe('<Container />', () => {
  it('should render the Container', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>My Drugs</span>
      </Container>
    );

    expect(screen.getByText(/my drugs/i)).toBeInTheDocument();
    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    );
    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    );
  });
});
