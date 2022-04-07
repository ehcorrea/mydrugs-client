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

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>;
    },
  };
});

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>;
    },
  };
});

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>;
    },
  };
});

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock BannerSlider"></div>;
    },
  };
});

describe('<Home />', () => {
  it('should render page and components', () => {
    renderWithTheme(<Home {...HOME_PROPS_MOCK} />);

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument();
    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4);
  });
});
