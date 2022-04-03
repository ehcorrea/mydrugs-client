import { Story, Meta } from '@storybook/react';
import { Iconfinder } from 'styled-icons/simple-icons';
import TextField from '.';
import { TextFieldProps } from './types';

export default {
  title: 'TextField',
  component: TextField,
  args: {
    labelOptions: { text: 'Email', labelFor: 'Email' },
    id: 'Email',
    initialValue: '',
    placeholder: 'email@gmail.com',
  },
  argTypes: {
    onInput: { action: 'changed' },
  },
} as Meta;

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField disabled {...args} />
  </div>
);

export const WithIcon: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

WithIcon.args = {
  iconOptions: { element: <Iconfinder /> },
};

export const WithError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

WithError.args = {
  error: 'Ops...algo deu errado',
};
