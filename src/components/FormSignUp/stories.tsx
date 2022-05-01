import { Story, Meta } from '@storybook/react';
import FormSignIn from '.';

export default {
  title: 'FORM/Form Sign Up',
  component: FormSignIn,
} as Meta;

export const Default: Story = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignIn />
  </div>
);