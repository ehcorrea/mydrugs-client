import { render, screen } from '@testing-library/react';

import Pimba from '.';

describe('<Pimba />', () => {
  it('should render the Pimba', () => {
    render(<Pimba />);

    expect(screen.getByText(/pimba/i)).toBeInTheDocument();
  });
});
