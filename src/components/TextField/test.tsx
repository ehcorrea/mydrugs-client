import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Email } from 'styled-icons/material-outlined';

import { renderWithTheme } from 'utils/tests/helpers';

import TextField from '.';

describe('<TextField />', () => {
  it('Renders with Label', () => {
    renderWithTheme(
      <TextField
        labelOptions={{ text: 'Label', labelFor: 'Field' }}
        id="Field"
      />
    );

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('Renders without Label', () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument();
  });

  it('Renders with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />);

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument();
  });

  it('Changes its value when typing', async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField
        onInput={onInput}
        labelOptions={{ text: 'TextField', labelFor: 'TextField' }}
        id="TextField"
      />
    );

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });
    expect(onInput).toHaveBeenCalledWith(text);
  });

  it('Is accessible by tab', () => {
    renderWithTheme(
      <TextField
        labelOptions={{ text: 'TextField', labelFor: 'TextField' }}
        id="TextField"
      />
    );

    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('Renders with Icon', () => {
    renderWithTheme(
      <TextField iconOptions={{ element: <Email data-testid="icon" /> }} />
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('Does not changes its value when disabled', async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField
        onInput={onInput}
        labelOptions={{ text: 'TextField', labelFor: 'TextField' }}
        id="TextField"
        disabled
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
    expect(onInput).not.toHaveBeenCalled();
  });

  it('Is not accessible by tab when disabled', () => {
    renderWithTheme(
      <TextField
        labelOptions={{ text: 'TextField', labelFor: 'TextField' }}
        id="TextField"
        disabled
      />
    );

    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).not.toHaveFocus();
  });

  it('render error text', () => {
    renderWithTheme(
      <TextField
        labelOptions={{ text: 'TextField', labelFor: 'TextField' }}
        error="Ops, alguma coisa deu errada"
        id="TextField"
        disabled
      />
    );

    expect(
      screen.getByText('Ops, alguma coisa deu errada')
    ).toBeInTheDocument();
  });
});
