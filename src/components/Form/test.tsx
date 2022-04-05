import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { FormWrapper, FormLink } from '.';

describe('<Form />', () => {
  it('should render the Form', () => {
    renderWithTheme(
      <FormWrapper>
        A test of<FormLink>link</FormLink>
      </FormWrapper>
    );

    expect(screen.getByText(/link/i)).toBeInTheDocument();
  });
});
