import { render, screen } from '@testing-library/react';

import Button from '.';

describe('<Button />', () => {
  it('should render the Button', () => {
    render(<Button />);

    expect(screen.getByTestId('button')).toBeInTheDocument();
  });
});
