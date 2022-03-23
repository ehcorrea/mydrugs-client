import { Story, Meta } from '@storybook/react';
import Checkbox from '.';
import { CheckboxProps } from './types';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    labelOptions: {
      name: 'label options',
    },
    onCheck: { action: 'checked' },
  },
  parameters: {
    backgrounds: {
      default: 'mydrugs-dark',
    },
  },
} as Meta;

export const Default: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="drugsource"
        isChecked
        labelOptions={{ text: 'DrugsData', labelFor: 'DrugsData' }}
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="drugsource"
        labelOptions={{ text: 'SaferParty.ch', labelFor: 'SaferParty.ch' }}
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="drugsource"
        labelOptions={{ text: 'PartyData', labelFor: 'PartyData' }}
        {...args}
      />
    </div>
  </>
);
