import 'match-media-mock';

import { screen } from '@testing-library/react';
import DRUG_CARD_MOCK from 'components/DrugCardSlider/mock';
import HIGHLIGHT_MOCK from 'components/Highlight/mock';

import Showcase from '.';
import { renderWithTheme } from 'utils/tests/helpers';

const SHOWCASE_MOCK = {
  title: 'MostPorpular',
  highlight: HIGHLIGHT_MOCK,
  drugs: DRUG_CARD_MOCK.slice(0, 1),
};

describe('<Showcase />', () => {
  it('should render the Showcase with all components', () => {
    renderWithTheme(<Showcase {...SHOWCASE_MOCK} />);

    expect(
      screen.getByRole('heading', { name: /mostporpular/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /your trippy/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /blue punisher/i })
    ).toBeInTheDocument();
  });

  it('should render the Showcase without title', () => {
    renderWithTheme(<Showcase {...SHOWCASE_MOCK} title="" />);

    expect(
      screen.queryByRole('heading', { name: /mostporpular/i })
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /your trippy/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /blue punisher/i })
    ).toBeInTheDocument();
  });

  it('should render the Showcase without highlight', () => {
    renderWithTheme(<Showcase {...SHOWCASE_MOCK} highlight={undefined} />);

    expect(
      screen.getByRole('heading', { name: /mostporpular/i })
    ).toBeInTheDocument();

    expect(
      screen.queryByRole('heading', { name: /your trippy/i })
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /blue punisher/i })
    ).toBeInTheDocument();
  });

  it('should render the Showcase without drugcards', () => {
    renderWithTheme(<Showcase {...SHOWCASE_MOCK} drugs={undefined} />);

    expect(
      screen.getByRole('heading', { name: /mostporpular/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /your trippy/i })
    ).toBeInTheDocument();

    expect(
      screen.queryByRole('heading', { name: /blue punisher/i })
    ).not.toBeInTheDocument();
  });
});
