import { Story, Meta } from '@storybook/react';
import DRUG_CARD_MOCK from 'components/DrugCardSlider/mock';
import HIGHLIGHT_MOCK from 'components/Highlight/mock';
import shuffleArray from 'utils/helpers/shuffleArray';
import Showcase from '.';
import { ShowcaseProps } from './types';

export default {
  title: 'EXPOSITION/Showcase',
  component: Showcase,
  decorators: [(Story) => <div style={{ margin: '0 auto' }}>{<Story />}</div>],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'mydrugs-dark',
    },
  },
} as Meta;

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />;

Default.args = {
  title: 'MostPorpular',
  highlight: HIGHLIGHT_MOCK,
  drugs: shuffleArray(DRUG_CARD_MOCK),
};

export const WithoutHighlight: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

WithoutHighlight.args = {
  title: 'MostPorpular',
  drugs: shuffleArray(DRUG_CARD_MOCK),
};

export const WithoutDrugs: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

WithoutDrugs.args = {
  title: 'MostPorpular',
  highlight: HIGHLIGHT_MOCK,
};
