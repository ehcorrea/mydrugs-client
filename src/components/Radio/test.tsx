import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import Radio from '.';

describe('<Radio />', () => {
  it('should render the Radio with Label', () => {
    renderWithTheme(
      <Radio
        labelOptions={{ text: 'radio label', labelFor: 'radio' }}
        id="radio"
        name="radio"
        value="radio"
      />
    );

    expect(
      screen.getByRole('radio', { name: /radio label/i })
    ).toBeInTheDocument();
    expect(screen.getByText('radio label')).toHaveAttribute('for', 'radio');
  });

  it('should not render with label', () => {
    renderWithTheme(<Radio />);

    expect(screen.getByRole('radio')).toBeInTheDocument();
    expect(screen.queryByLabelText('radio label')).not.toBeInTheDocument();
  });

  it('should with black render label', () => {
    renderWithTheme(
      <Radio
        labelOptions={{
          text: 'radio label',
          labelFor: 'radio',
          color: 'black',
        }}
        id="radio"
      />
    );

    expect(screen.getByText('radio label')).toHaveStyle({
      color: '#030517',
    });
  });

  it('should dispatch onCheck on status change', async () => {
    const onCheck = jest.fn();

    renderWithTheme(
      <Radio
        labelOptions={{
          text: 'radio label',
          labelFor: 'radio',
        }}
        value="radio"
        onCheck={onCheck}
      />
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('radio'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith('radio');
  });

  it('should  render with defaultChecked', () => {
    renderWithTheme(<Radio defaultChecked />);

    expect(screen.getByRole('radio')).toHaveAttribute('checked');
  });

  it('should be accessible with tab', () => {
    renderWithTheme(<Radio />);

    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(screen.getByRole('radio')).toHaveFocus();
  });
});
