import BANNER_SLIDER_MOCK from 'components/BannerSlider/mock';
import DRUG_CARD_MOCK from 'components/DrugCardSlider/mock';
import HIGHLIGHT_MOCK from 'components/Highlight/mock';
import Home from 'templates/Home';
import { HomeTemplateProps } from 'templates/Home/types';
import shuffleArray from 'utils/helpers/shuffleArray';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export function getServerSideProps() {
  return {
    props: {
      banners: BANNER_SLIDER_MOCK,
      mostPopularDrugs: shuffleArray(DRUG_CARD_MOCK),
      mostPopularHighlight: HIGHLIGHT_MOCK,
      newDrugs: shuffleArray(DRUG_CARD_MOCK),
      upcommingDrugs: shuffleArray(DRUG_CARD_MOCK),
      upcommingHighlight: HIGHLIGHT_MOCK,
      upcommingMoreDrugs: shuffleArray(DRUG_CARD_MOCK),
    },
  };
}
