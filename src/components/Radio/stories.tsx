import { Story, Meta } from '@storybook/react';
import Radio from '.';
import { RadioProps } from './types';

export default {
  title: 'FORM/Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'mydrugs-dark',
    },
  },
  argTypes: {
    onCheck: { action: 'checked' },
  },
} as Meta;

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        labelOptions={{ text: 'First', labelFor: 'first' }}
        id="first"
        name="position"
        value="first"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        labelOptions={{ text: 'Second', labelFor: 'second' }}
        id="second"
        name="position"
        value="second"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        labelOptions={{ text: 'Third', labelFor: 'third' }}
        id="third"
        name="position"
        value="third"
        {...args}
      />
    </div>
  </>
);
