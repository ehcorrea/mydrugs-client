import { Story, Meta } from '@storybook/react';
import { Email } from 'styled-icons/material-outlined';
import TextField from '.';
import { TextFieldProps } from './types';

export default {
  title: 'FORM/Text Field',
  component: TextField,
  args: {
    labelOptions: { text: 'Email', labelFor: 'Email' },
    id: 'Email',
    initialValue: '',
    placeholder: 'email@gmail.com',
    disabled: false,
    error: '',
  },
  argTypes: {
    onInput: { action: 'changed' },
  },
} as Meta;

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

export const WithIcon: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

WithIcon.args = {
  iconOptions: { element: <Email /> },
};

export const WithError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

WithError.args = {
  iconOptions: { element: <Email /> },
  error: 'Ops...algo deu errado',
};
