import 'match-media-mock';

import { screen } from '@testing-library/react';
import BANNER_SLIDER_MOCK from 'components/BannerSlider/mock';
import DRUG_CARD_MOCK from 'components/DrugCardSlider/mock';
import HIGHLIGHT_MOCK from 'components/Highlight/mock';
import { renderWithTheme } from 'utils/tests/helpers';

import Home from '.';
import { HomeTemplateProps } from './types';

const HOME_PROPS_MOCK: HomeTemplateProps = {
  banners: BANNER_SLIDER_MOCK,
  mostPopularDrugs: [DRUG_CARD_MOCK[0]],
  mostPopularHighlight: HIGHLIGHT_MOCK,
  newDrugs: [DRUG_CARD_MOCK[0]],
  upcommingDrugs: [DRUG_CARD_MOCK[0]],
  upcommingHighlight: HIGHLIGHT_MOCK,
  upcommingMoreDrugs: [DRUG_CARD_MOCK[0]],
};

describe('<Home />', () => {
  it('should render page integration', () => {
    renderWithTheme(<Home {...HOME_PROPS_MOCK} />);

    //render menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

    //render footer
    expect(
      screen.getByRole('heading', { name: /Contact/i })
    ).toBeInTheDocument();

    //render menu/footer
    expect(screen.getAllByRole('img', { name: /my drugs/i })).toHaveLength(2);

    //render banner
    expect(
      screen.getByRole('heading', {
        name: 'LSD / MDMA / ECSTASY',
      })
    ).toBeInTheDocument();

    //render section
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /upcomming/i })
    ).toBeInTheDocument();

    //render section elements
    expect(screen.getAllByText(/blue punisher/i)).toHaveLength(4);
    expect(screen.getAllByText(/mdma for good party/i)).toHaveLength(2);
  });
});
