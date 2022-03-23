import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(
      <Checkbox labelOptions={{ text: 'checkbox label', labelFor: 'check' }} />
    );

    expect(
      screen.getByRole('checkbox', { name: /checkbox label/i })
    ).toBeInTheDocument();
    expect(screen.getByText('checkbox label')).toHaveAttribute('for', 'check');
  });

  it('should not render with label', () => {
    renderWithTheme(<Checkbox />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.queryByLabelText('checkbox label')).not.toBeInTheDocument();
  });

  it('should with black render label', () => {
    renderWithTheme(
      <Checkbox
        labelOptions={{
          text: 'checkbox label',
          labelFor: 'check',
          color: 'black',
        }}
      />
    );

    expect(screen.getByText('checkbox label')).toHaveStyle({
      color: '#030517',
    });
  });

  it('should dispatch onCheck on status change', async () => {
    const onCheck = jest.fn();

    renderWithTheme(
      <Checkbox
        labelOptions={{
          text: 'Checkbox',
          labelFor: 'Checkbox',
        }}
        onCheck={onCheck}
      />
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('should dispatch onCheck false on status change', async () => {
    const onCheck = jest.fn();

    renderWithTheme(
      <Checkbox
        labelOptions={{
          text: 'Checkbox',
          labelFor: 'Checkbox',
        }}
        onCheck={onCheck}
        isChecked
      />
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it('should be accessible with tab', () => {
    renderWithTheme(<Checkbox />);

    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(screen.getByRole('checkbox')).toHaveFocus();
  });
});
